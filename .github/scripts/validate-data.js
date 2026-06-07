// Validate models.json and companies.json data integrity
// Run: node .github/scripts/validate-data.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const errors = [];

// ── Validate models.json ──
const modelsPath = path.join(ROOT, 'data', 'models.json');
let models;
try {
  const raw = fs.readFileSync(modelsPath, 'utf-8');
  models = JSON.parse(raw);
} catch (err) {
  errors.push(`models.json: invalid JSON — ${err.message}`);
  models = [];
}

if (!Array.isArray(models)) {
  errors.push(`models.json: must be an array, got ${typeof models}`);
} else {
  const ids = new Set();
  const VALID_ORIGINS = ['us', 'cn', 'eu', 'other'];
  const DATE_RE = /^\d{4}(-\d{2})?$/;

  models.forEach((m, i) => {
    const prefix = `models[${i}] (${m.name || 'unknown'})`;

    // Required fields
    const required = ['id', 'name', 'company', 'origin', 'date', 'desc', 'tags'];
    required.forEach(field => {
      if (!m[field]) {
        errors.push(`${prefix}: missing required field "${field}"`);
      }
    });

    // id uniqueness
    if (m.id) {
      if (ids.has(m.id)) {
        errors.push(`${prefix}: duplicate id "${m.id}"`);
      }
      ids.add(m.id);
    }

    // origin validation
    if (m.origin && !VALID_ORIGINS.includes(m.origin)) {
      errors.push(`${prefix}: invalid origin "${m.origin}" (must be one of: ${VALID_ORIGINS.join(', ')})`);
    }

    // date format
    if (m.date && !DATE_RE.test(m.date)) {
      errors.push(`${prefix}: invalid date format "${m.date}" (must be YYYY-MM or YYYY)`);
    }

    // flagship must be boolean
    if (m.flagship !== undefined && typeof m.flagship !== 'boolean') {
      errors.push(`${prefix}: "flagship" must be boolean, got ${typeof m.flagship}`);
    }

    // tags must be array
    if (m.tags && !Array.isArray(m.tags)) {
      errors.push(`${prefix}: "tags" must be an array, got ${typeof m.tags}`);
    }
  });
}

// ── Validate companies.json ──
const companiesPath = path.join(ROOT, 'data', 'companies.json');
let companies;
try {
  const raw = fs.readFileSync(companiesPath, 'utf-8');
  companies = JSON.parse(raw);
} catch (err) {
  errors.push(`companies.json: invalid JSON — ${err.message}`);
  companies = {};
}

const VALID_ORIGINS = ['us', 'cn', 'eu', 'other'];
const COMPANY_REQUIRED = ['color', 'logo', 'origin'];
Object.entries(companies).forEach(([name, cfg]) => {
  COMPANY_REQUIRED.forEach(field => {
    if (!cfg[field]) {
      errors.push(`companies.${name}: missing required field "${field}"`);
    }
  });
  if (cfg.origin && !VALID_ORIGINS.includes(cfg.origin)) {
    errors.push(`companies.${name}: invalid origin "${cfg.origin}"`);
  }
});

// ── Cross-validate: model companies exist in companies.json ──
if (Array.isArray(models) && companies) {
  const companyNames = new Set(Object.keys(companies));
  models.forEach((m, i) => {
    if (m.company && !companyNames.has(m.company)) {
      errors.push(`models[${i}] (${m.name}): company "${m.company}" not found in companies.json`);
    }
  });
}

// ── Report ──
if (errors.length > 0) {
  console.log(`❌ Validation failed with ${errors.length} error(s):\n`);
  errors.forEach(e => console.log(`  • ${e}`));
  console.log(`\n`);
  process.exit(1);
} else {
  console.log(`✅ All validations passed (${Array.isArray(models) ? models.length : 0} models, ${Object.keys(companies).length} companies)`);
}

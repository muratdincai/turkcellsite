#!/usr/bin/env node

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = join(__dirname, '../src');

const EXPECTED_URLS = {
    driveVideo: 'https://drive.google.com/file/d/1DCWv69H-HB_5WPRYUl7nWUJtepNoX-Wo/view',
    driveFolder: 'https://drive.google.com/drive/folders/1CiFjU5LxlqMvXt-kOQsLcvfLsMLKhkxi',
    pdfPath: '/pdf/rapor.pdf',
};

function findInFiles(dir, pattern) {
    let found = [];

    const files = readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = join(dir, file.name);

        if (file.isDirectory()) {
            if (!file.name.startsWith('.') && file.name !== 'node_modules') {
                found = found.concat(findInFiles(fullPath, pattern));
            }
        } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
            const content = readFileSync(fullPath, 'utf-8');
            if (content.includes(pattern)) {
                found.push({ file: fullPath, pattern });
            }
        }
    }

    return found;
}

console.log('🔍 Checking links...\n');

const checks = [];

// Check Drive video URL
const driveVideoFiles = findInFiles(srcDir, EXPECTED_URLS.driveVideo);
if (driveVideoFiles.length > 0) {
    console.log(`✓ Drive video URL found in ${driveVideoFiles.length} file(s)`);
    checks.push(true);
} else {
    console.error('❌ Drive video URL not found in source files');
    checks.push(false);
}

// Check Drive folder URL
const driveFolderFiles = findInFiles(srcDir, EXPECTED_URLS.driveFolder);
if (driveFolderFiles.length > 0) {
    console.log(`✓ Drive folder URL found in ${driveFolderFiles.length} file(s)`);
    checks.push(true);
} else {
    console.error('❌ Drive folder URL not found in source files');
    checks.push(false);
}

// Check PDF path
const pdfFiles = findInFiles(srcDir, EXPECTED_URLS.pdfPath);
if (pdfFiles.length > 0) {
    console.log(`✓ PDF path found in ${pdfFiles.length} file(s)`);
    checks.push(true);
} else {
    console.error('❌ PDF path not found in source files');
    checks.push(false);
}

const allPassed = checks.every(check => check === true);

if (allPassed) {
    console.log('\n✅ All link checks passed!');
    process.exit(0);
} else {
    console.log('\n❌ Some link checks failed!');
    process.exit(1);
}

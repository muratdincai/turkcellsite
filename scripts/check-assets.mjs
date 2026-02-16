#!/usr/bin/env node

import { existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '../public');

const VALID_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.pdf'];

function checkDirectory(dirPath, minFiles = 1) {
    if (!existsSync(dirPath)) {
        console.error(`❌ Directory missing: ${dirPath}`);
        return false;
    }

    const files = readdirSync(dirPath);
    const validFiles = files.filter(file => {
        const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
        return VALID_EXTENSIONS.includes(ext);
    });

    if (validFiles.length < minFiles) {
        console.error(`❌ Directory ${dirPath} has ${validFiles.length} valid files, expected at least ${minFiles}`);
        return false;
    }

    console.log(`✓ ${dirPath} (${validFiles.length} files)`);
    return true;
}

function checkFile(filePath) {
    if (!existsSync(filePath)) {
        console.error(`❌ File missing: ${filePath}`);
        return false;
    }

    const ext = filePath.substring(filePath.lastIndexOf('.')).toLowerCase();
    if (!VALID_EXTENSIONS.includes(ext)) {
        console.error(`❌ Invalid file extension: ${filePath}`);
        return false;
    }

    console.log(`✓ ${filePath}`);
    return true;
}

console.log('🔍 Checking public asset integrity...\n');

const checks = [
    // PDF must exist
    checkFile(join(publicDir, 'pdf/rapor.pdf')),

    // Image directories must have at least 1 image
    checkDirectory(join(publicDir, 'ss'), 1),
    checkDirectory(join(publicDir, 'murat'), 1),
    checkDirectory(join(publicDir, 'miray'), 1),
    checkDirectory(join(publicDir, 'muhammed'), 1),
];

const allPassed = checks.every(check => check === true);

if (allPassed) {
    console.log('\n✅ All asset checks passed!');
    process.exit(0);
} else {
    console.log('\n❌ Some asset checks failed!');
    process.exit(1);
}

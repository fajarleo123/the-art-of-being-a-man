// Copies episode images and audio from the repository into remotion/public
// (public/ is git-ignored; the originals stay in episodes/ and voice-over/).
import {cpSync, existsSync, mkdirSync, readdirSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const pub = join(root, 'remotion', 'public');

for (const [srcDir, sub] of [['episodes', 'images'], ['voice-over', 'audio']]) {
  const base = join(root, srcDir);
  if (!existsSync(base)) continue;
  for (const ep of readdirSync(base, {withFileTypes: true})) {
    if (!ep.isDirectory()) continue;
    const from = join(base, ep.name, sub);
    if (!existsSync(from)) continue;
    const to = join(pub, ep.name, sub);
    mkdirSync(to, {recursive: true});
    cpSync(from, to, {recursive: true});
    console.log(`synced ${srcDir}/${ep.name}/${sub}`);
  }
}

// Channel fonts (OFL, stored in assets/fonts) -> public/fonts
const fonts = join(root, 'assets', 'fonts');
if (existsSync(fonts)) {
  mkdirSync(join(pub, 'fonts'), {recursive: true});
  cpSync(fonts, join(pub, 'fonts'), {recursive: true});
  console.log('synced assets/fonts');
}

// Licensed music is kept local only (never committed): assets/music -> public/music-local
const musicDir = join(root, 'assets', 'music');
if (existsSync(musicDir)) {
  mkdirSync(join(pub, 'music-local'), {recursive: true});
  cpSync(musicDir, join(pub, 'music-local'), {recursive: true});
  console.log('synced assets/music (local only)');
}

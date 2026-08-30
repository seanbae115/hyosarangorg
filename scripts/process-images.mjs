// Image pipeline for the Hyosarang / KSLC site.
// Reads the source photos in ../자료 사진들 and the logo in ../효사랑 로고.jpg,
// writes web-optimized assets into public/. Run: npm run images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const ROOT = "..";
const SRC = `${ROOT}/자료 사진들`;
const OUT = "public/photos";
const OUT_LG = "public/photos/lg";
await mkdir(OUT, { recursive: true });
await mkdir(OUT_LG, { recursive: true });

// [sourceFile, outName, rotateDegrees, baseDir]  — baseDir defaults to SRC
const photos = [
  ["KakaoTalk_20260826_162253555.jpg", "digital-literacy.jpg", 0],
  ["KakaoTalk_20260826_162253555_02.jpg", "senior-college-music.jpg", 0],
  ["KakaoTalk_20260827_124834976_02.jpg", "senior-college-nanta.jpg", 0, ROOT],
  ["KakaoTalk_20260826_162253555_11.jpg", "senior-college-choir.jpg", 0],
  ["KakaoTalk_20260826_162253555_05.jpg", "fellowship-meal.jpg", 0],
  ["KakaoTalk_20260826_162253555_03.jpg", "mission-ensemble.jpg", 0],
  ["KakaoTalk_20260826_162253555_04.jpg", "mission-fellowship.jpg", 0],
  ["KakaoTalk_20260826_162253555_07.jpg", "recognition-1.jpg", 90],
  ["KakaoTalk_20260826_162253555_08.jpg", "recognition-2.jpg", 90],
  ["KakaoTalk_20260827_124923589.jpg", "art-class.jpg", 0],
  ["KakaoTalk_20260827_124923589_04.jpg", "art-class-2.jpg", 0],
  // Program + barrier illustrations (added later, sit in the project root).
  ["Senior & Family Support.jpg", "program-support.jpg", 0, ROOT],
  ["Citizenship & English.jpg", "program-citizenship.jpg", 0, ROOT],
  ["Health & Benefits Education.jpg", "program-health.jpg", 0, ROOT],
  ["Youth Identity & Hyo Contest.jpg", "program-youth.jpg", 0, ROOT],
  ["publicbenefits.jpg", "barrier-benefits.jpg", 0, ROOT],
  ["housing.jpg", "barrier-housing.jpg", 0, ROOT],
  ["transportation.jpg", "barrier-transport.jpg", 0, ROOT],
];

for (const [src, out, rotate, baseDir = SRC] of photos) {
  const base = sharp(`${baseDir}/${src}`)
    .rotate(rotate) // explicit; with no arg sharp would auto-apply EXIF
    .modulate({ brightness: 1.02, saturation: 0.98 });

  // Display image (1600px)
  await base
    .clone()
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(`${OUT}/${out}`);
  console.log("wrote", `${OUT}/${out}`);

  // Hi-res image for the zoom lightbox (2400px)
  await base
    .clone()
    .resize({ width: 2400, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`${OUT_LG}/${out}`);
  console.log("wrote", `${OUT_LG}/${out}`);
}

// Infographic — keep as PNG, just size it down.
await sharp(`${SRC}/HYOSARANG MISSION_Senior Integrated Ministry Overview.png`)
  .resize({ width: 2000, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile("public/senior-ministry-overview.png");
console.log("wrote public/senior-ministry-overview.png");

// Home hero background — the commissioned community watercolor (bg.png).
// Full-bleed behind the hero copy; a navy scrim sits on top in CSS.
await sharp(`${ROOT}/bg.png`)
  .resize({ width: 1920, withoutEnlargement: true })
  .jpeg({ quality: 74, mozjpeg: true })
  .toFile("public/hero-community.jpg");
console.log("wrote public/hero-community.jpg");

// Founder portrait — square crop for the founder's-message card.
await sharp(`${ROOT}/youngchankim.png`)
  .resize(560, 560, { fit: "cover" })
  .flatten({ background: { r: 255, g: 255, b: 255 } })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile("public/founder-kim.jpg");
console.log("wrote public/founder-kim.jpg");

// Logo — pad to a white square so it sits cleanly at any size.
await sharp(`${ROOT}/효사랑 로고.jpg`)
  .resize({
    width: 480,
    height: 480,
    fit: "contain",
    background: { r: 255, g: 255, b: 255 },
  })
  .jpeg({ quality: 92 })
  .toFile("public/hyosarang-logo.jpg");
console.log("wrote public/hyosarang-logo.jpg");

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const folder = searchParams.get('folder');

  if (!folder) {
    return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
  }

  try {
    const publicDir = path.join(process.cwd(), 'public');
    const folderPath = path.join(publicDir, folder);

    if (!fs.existsSync(folderPath)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(folderPath);

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .sort()
      .map(file => `${folder}/${file}`);

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading slideshow images:', error);
    return NextResponse.json({ error: 'Failed to read images' }, { status: 500 });
  }
}

"use server";

import { promises as fs } from "fs";
import path from "path";

/**
 * Server action to save a file from FormData
 * @param {FormData} formData - The FormData containing the file
 * @returns {Promise<{message: string, filePath: string}>}
 */
export async function saveFile(formData) {
  try {
    const file = formData.get("file");

    if (!file) {
      throw new Error("No file provided");
    }

    // Convert File to ArrayBuffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create the audio directory if it doesn't exist
    const audioDir = path.join(process.cwd(), "public", "audio");
    await fs.mkdir(audioDir, { recursive: true });

    // Save the file
    const fileName = file.name;
    const filePath = path.join(audioDir, fileName);
    await fs.writeFile(filePath, buffer);

    return {
      message: "File saved successfully",
      filePath: `/audio/${fileName}`, // Return the public path
    };
  } catch (error) {
    throw new Error(
      `Error saving file: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

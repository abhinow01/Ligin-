import axios from "axios";

const fileKey = "";
const accessToken = "";

async function getFigmaVariables() {
  const url = `https://api.figma.com/v1/files/${fileKey}/variables/local`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Figma-Token': accessToken
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch variables:", error);
  }
}

getFigmaVariables()
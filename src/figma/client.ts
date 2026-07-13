import axios, { AxiosInstance } from "axios";

export class FigmaClient {
  private client: AxiosInstance;
  private fileId: string;

  constructor(accessToken: string, fileId: string) {
    console.log({
    accessToken,
    fileId
  });

    this.fileId = fileId;

    this.client = axios.create({
      baseURL: "https://api.figma.com/v1",
      headers: {
        "X-Figma-Token": accessToken,
      },
    });
  }

  /**
   * Fetch all local variables from a Figma file.
   */
  async getVariables() {
    const response = await this.client.get(
      `/files/${this.fileId}/variables/local`
    );
    console.log("Status:", response.status);
    // console.log("Keys:", Object.keys(response.data));
    return response.data;
  }
}
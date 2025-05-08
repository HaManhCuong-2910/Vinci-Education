import { google } from "googleapis";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: "webrtc-test-5b390",
        private_key_id: "930e6edd056a43b583b3d61791a5f4bc474fe68a",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCGWTACKgi4lrEd\nVRT5euuprnKT0DzipqBxW1bo3dWe+r23avVz9+8gyJSA24/WiybJtgiBtaAg50QF\nHiPAGxhBBFD7efhGJNooQo4zsu4+DbwwzbbQXbNljJJ3ZOtO6SNwviWgtHeOeX9b\n2F2PGAv1s3BWjEgYXAFYrflZ0VOijtxAyW6rXhx+j9Xw0iOgjl0DkodXVvyV/We0\noL1alM7PF/XUuzug531ta+YdCtdwZCK0wfKef8nVv2R4T4Xzu51JDGcFTCpvA7Xo\nLUZyjVLx2OIEgd8F0j2d2bMYR2UFOfVX06pLTcoGghK4OPW5V5ePIHIu93FKDNqL\nM/Vul/8fAgMBAAECggEAFAAeDgxs7PH+HxRGAZgDkmi2hPvYvJM6ynVjHFq+DSNd\n7/rb3K5Z6qMBvKczJCjmFtxjKtA7rPpQ3YQtpVFDTJaUacOwKt0cnya9XcPzBMjt\nrcRKRX3VkbYaLe0XvNEnZgbguipzrAG5bJZq4z0ctrDGdhP/PaUgzC9mMjFgBpCP\n0JSIiye2ttQ8HwlUw+LaaciCzonGffcfEs9ckYmWBWK71Hx/cNimxB4CSXIiEgQt\nY46W8j02H4DM95r9d6XpPNZQ9B+ticraEb2RvXupAIQTcPzPnUbGND2z2gHQrxj8\nAFZeaASvr60DIi5He0AI4M7YJquHcJOtKCFfUHjytQKBgQC6cGxbIxnqeXspwn0c\n38YLOFFGj6iVS3kbaOJnVLC/i3ZxpKI80SHGMNx8nHh5G2xJhhnIXWrXV8pWQ052\n6JibR7m8sOWnftURE7hTHwLk1hOWmYIwR3Eh3YN5kn6tznv2XgNjt93kIRDNmkeL\nvKPc+7dzLUDXQwjrEqi4vL0y4wKBgQC4eVv78EVNBMEM6rCAHY9pnYW/VDpVt8Jx\noroqz2bVNhkbkUqF8jVfXlXpe9Z1QsPVCyFFTETCFrWIJ6ZPPxsqV0sWeZc054oT\ntpErw857K7wqIdnlWDU5bVh3N8jUKFvcH0KKLvdCXaaeY8sWeyJFHxZRgGB+63l+\nJmpSYqHrlQKBgQC1c8WBzd/jPOiJ9Cggegod0WoI6riA1TvBWYtAVkTPp8RXRow/\n9KqSYeu1u/PkqrPxuvpM796UR3U+D7PGNwqP1ncHFoPtSJvGSxMSkxQV8+SMpkr3\nAhExjI3xPIreTiCH32gdHU5wQV5BPO51Kduxr6sUBe8dkriTUU20vrzFUQKBgFVp\nm3VjIjMu6FOatm4bQbOdA7g6v2fA1X7X4WrA7NP7YFSrSN4L7zpg61ZXyEwyxYl2\nxcjYL13ONe78rLw0c9d+431cfu435m6KMV0aJBhTf6PiWIkf9kTIpBVO9uWEakPZ\nFW31oPZRdjwP6JBYIt3uLt89mXAqhu4py0Cp+l6hAoGBALa5LIBgjjI42W82Jvjc\nwZ4NKLmeMHN7nveDaoSlKfT17AGJBnPhikDnl0kEJ5vXNUTR6eSd9H2UzdieVmtm\niN9U1quT27ZFYo9ZsUd8idjL/W2js4bDF2GMQAhLhsIaGbxNhYkimnHvffWdWC7K\nAihD6hdJ34oafCVnayIdziWU\n-----END PRIVATE KEY-----\n",
        client_email:
          "sheets-wedding@webrtc-test-5b390.iam.gserviceaccount.com",
        client_id: "101810588951113512818",
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const googleSheets = google.sheets({ version: "v4", auth });

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId: "1IDUM0ii75Bgfm6IwXaalBo2P8ELhv0qpvHQgzSwipbU",
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.phoneNumber, body.time]],
      },
    });
    console.log("pass");
    return { body };
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

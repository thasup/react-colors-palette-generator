interface Color {
  code: string;
  name: string;
}

interface PromptResponse {
  result: Color[];
}

const postPrompt = async (query: string): Promise<PromptResponse> => {
  if (!query) {
    throw new Error("Missing a query");
  }
  const response = await fetch("https://api.thanachon.com/v1/colors/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      input: query,
    }),
  });

  const data = response.json();

  return data;
};

export { postPrompt };

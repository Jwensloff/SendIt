export const searchResort = async (name: string) => {
  const editedName = name.toLowerCase().split(" ").join("-");
  const url =
    "https://corsproxy.io/?" +
    encodeURIComponent(`https://liftie.info/api/resort/${editedName}`);
  try {
    const response = await fetch(`${url}`, {
      method: "GET",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Resource Not Found");
      } else {
        throw new Error("Something Went Wrong");
      }
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unexpected error occurred";
  }
};

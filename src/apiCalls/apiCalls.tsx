export const searchResort = async (name: string) => {
  const editedName = name.toLowerCase().split(" ").join("-");
  try {
    const response = await fetch(`https://liftie.info/api/resort/${name}`, {
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

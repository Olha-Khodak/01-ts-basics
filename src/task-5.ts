function logStatus(status: "loading" | "success" | "error"): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
//logStatus("unknown");//Argument of type '"unknown"' is not assignable to parameter of type '"loading" | "success" | "error"'.

import { toast } from "react-toastify"

export const printError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: 0,
        theme: "dark",
    })
}

export const toastIt = async(funkce, successZprava, pendingZprava = "Počítám...") =>
{
    try {
        await toast.promise(
          async () => {
            funkce();
          },
          {
              pending: pendingZprava,
              success: successZprava,
              error: {
                  render({ data }) {
                      return (data).message;
                  },
              },
          }
      );
      }
      catch {}
}
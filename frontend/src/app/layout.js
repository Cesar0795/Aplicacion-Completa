//import Menu from "@/components/menu";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
//import "@/app/estilos.css";

export const metadata = {
    title: "Web con next",
    description: "Front end con next"
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Navbar />
                {children}
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></Script>
            </body>
        </html>
    );
}
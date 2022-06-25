// import { Link } from "react-router-dom":
// import { CreateAccount, LogIn } from "../../buttons"

export default function Footer() {
  return (
    <>
      <div className="bg-teal-900 py-10 lg:py-20 relative">
        <div className="slant-footer"></div>
        <footer className="max-width grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-white text-3xl">Invoicer</h2>
          </div>

          

        
          <p className="text-slate-200">
            Built by{" "}
            <a
              href="https://moubarik.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-slate-50"
            >
              Moubarik
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

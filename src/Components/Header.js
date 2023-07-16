import { useRef, useEffect } from "react"
export default function Header() {
    const dref = useRef()
    useEffect(() => {
        window.onscroll = () => {
            if (document.documentElement.scrollTop >50) {
                dref.current.classList.add('tc')
            } else {
                dref.current.classList.remove('tc')
            }
        }

    }, [])
    return (
        <div className="header " ref={dref} >

            <nav className="navbar navbar-expand-lg header ">
                <div className="container-fluid ">
                    
                    <h3 class="navbar-brand bold" >Gowrishankar</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    </div>
                    <div className="collapse navbar-collapse pe-5 " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link bold " aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item bold">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                            <li className="nav-item bold">
                                <a className="nav-link" href="#Projects">Projects</a>
                            </li>


                        </ul>

                   
                </div>
            </nav>
        </div>

    )
}
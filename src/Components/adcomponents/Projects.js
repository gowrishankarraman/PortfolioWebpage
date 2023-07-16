export default function Projects() {
    const projectdata = [
        {
            "Project_Name": "SDS",
            "Contribution": " Designer & Code developer.",
            "Languages": "Html,Css,JavaScript,Bootstrap,React js",
            "Url": "https://gowrishankarraman.github.io/sds/",
            "Compatibility": "Used Bootstrap 5.0 Framework – Cross Device Compatibility Website Testing",
            "img": "/fps-1.png"

        }, {
            "Project_Name": "G-Mart",
            "Contribution": " Designer & Code developer.",
            "Languages": "Html,Css,JavaScript,Bootstrap,React js,Redux,Nodejs,Express js",
            "Compatibility": "Used Bootstrap 5.0 Framework – Cross Device Compatibility Website Testing",
            "img": "/sps-1.png",
            "Packages":"jsonwebtoken,mongoose,multer, axios, http-proxy-middleware,react-router-dom"

        },
        {
            "Project_Name": "G-LaptopShop",
            "Contribution": " Designer & Code developer.",
            "Languages": "Html,Css,JavaScript,Bootstrap,React js,Redux",
            "Url": "https://laptopshop.gowrishankarram.repl.co/",
            "Compatibility": "Used Bootstrap 5.0 Framework – Cross Device Compatibility Website Testing",
            "img": "/tps-1.png"

        },
        {
            "Project_Name": "CityVegetable-shop",
            "Contribution": " Designer & Code developer.",
            "Languages": "Html,Css,JavaScript,Bootstrap,React js,Redux,Nodejs,Express js",
            "Compatibility": "Used Bootstrap 5.0 Framework – Cross Device Compatibility Website Testing",
            "img": "/fops-1.png",
            "Packages":"jsonwebtoken,mongoose,multer, axios, http-proxy-middleware,react-router-dom"

        }
    ]
    return (
        <div>
            <div>
                <h3 className="text-center" id="Projects"><b>PROJECTS</b></h3>
                <hr></hr>
                <div >

                    {
                        projectdata.map((pd, ind) => (
                            <div className="row d-flex justify-content-between " key={ind}>

                                <div className="col-12 col-md-5 card card_bg p-3 mb-2 hidden">
                                    <h4 className=""> <b>Project Name : {pd.Project_Name}</b></h4>
                                    <hr></hr>

                                    <div className="pt-4" >
                                        <h5 className="d-inline">My Contribution:</h5>
                                        <h5 className="d-inline"> {pd.Contribution}</h5>

                                    </div>
                                    <div className="pt-4">
                                        <h5 className="d-inline">Language Used:</h5>
                                        <h5 className="d-inline">{pd.Languages}</h5>

                                    </div>
                                    {pd.Url&&<div className="pt-4 gitlink">
                                        <h5 className="d-inline">Live Demo URL:</h5>
                                        <h5 className="d-inline"><a href={pd.Url} className='text-decoration-none'>{pd.Url}</a></h5>

                                    </div>}
                              
                                    <div className="pt-4" >
                                        <h5 className="d-inline">Device Compatibility Details:</h5>
                                        <h5 className="d-inline">{pd.Compatibility}</h5>

                                    </div>
                                    {pd.Packages && <div className="pt-4" >
                                        <h5 className="d-inline">Packages:</h5>
                                        <h5 className="d-inline">{pd.Packages}</h5>

                                    </div>}
                                   

                                </div>

                                <div className="col-12 col-md-5 text-center hidden my-auto">
                                    <img src={pd.img} alt="img" className="img-p1" ></img>

                                </div>
                                <hr></hr>
                            </div>
                            ))

                    }

                </div>

            </div>
        </div>

    )
}
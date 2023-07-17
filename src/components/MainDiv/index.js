import Navbar from "../Navbar";
import imgMat from '../../img/img-mat-1.jpg';
import { GithubButton, LinkedinButton } from "../Buttons";

export default function MainDiv() {
    return (
        <div className='min-vh-100 pb-xl-5' id='main'>
            <Navbar />
            <div
                className="container d-flex flex-column flex-md-column flex-sm-column flex-lg-row align-items-center justify-content-around py-0 py-xxl-5 mt-md-2 mt-lg-5 mt-xl-0 mt-xxl-3">

                <div className='col-11 col-sm-8 col-md-5 col-lg-4 col-xl-4 col-xxl-4 text-center my-lg-5 my-xl-3 my-xxl-5'>
                    <img className="img-fluid" width='400' src={imgMat} />
                </div>

                <div className="px-3 px-0 ps-sm-4  mt-0 mt-sm-0 mt-lg-5 mt-xl-3 mt-xxl-5 d-flex flex-column text-white">
                    <div className="display-1 fw-medium">Matheus</div>
                    <div className="display-1 fw-medium text-end">Gomes</div>
                    <div className="display-6 fw-lighter text-center">Desenvolvedor Full Stack</div>
                    <div className="align-self-center align-self-sm-end d-flex align-items-center my-2">
                        <GithubButton/>
                        <LinkedinButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
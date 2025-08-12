import Navbar from "../Navbar";
import imgMat from '../../img/img-1.jpg';
import { GithubButton, LinkedinButton } from "../Buttons";

export default function MainDiv() {
    return (
        <div className='min-vh-100 d-flex flex-column align-content-center pb-xl-5' id='main'>
            <div className='blur' id=""></div>
            <div className="blur" id=""></div>
            <Navbar />
            <div className="container flex-fill d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4">
                <div className='col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-4 text-center'>
                    <img className="img-fluid rounded-2" width='400' src={imgMat} />
                </div>
                <div className="ps-lg-5 ms-lg-5 d-flex flex-column texto-cinza anaglyph">
                    <div className="display-1 fw-medium">Matheus</div>
                    <div className="display-1 fw-medium text-end">Gomes</div>
                    <div className="display-6 fw-lighter text-center">Desenvolvedor Full Stack</div>
                </div>

            </div>
        </div>
    )
}
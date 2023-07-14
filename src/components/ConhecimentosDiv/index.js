import React, { useState } from 'react';

export default function ConhecimentosDiv() {

    const [texto, setTexto] = useState('TextoIcone');
    const [opacidade, setOpacidade] = useState(0);

    const handleMouseOver = (props) => {
        setOpacidade(1);
        setTexto(props)
    }

    const handleMouseLeave = () => {
        setOpacidade(0);
    };

    return (
        <div className='bg-light text-dark min-vh-100 d-flex flex-column' id="conhecimentos">
            <div className='display-2 fw-normal ms-2 ms-sm-5 py-3'>Conhecimentos</div>
            <div className='container my-auto'>
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-center">
                        <div className="py-5 px-lg-5 text-center" onMouseLeave={handleMouseLeave} >
                            <svg onMouseOver={() => handleMouseOver('C#')} id="csharp-icon" viewBox="0 0 128 128">
                                <path fill="#9B4F96"
                                    d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z">
                                </path>
                                <path fill="#68217A"
                                    d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z">
                                </path>
                                <path fill="#fff"
                                    d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z">
                                </path>
                            </svg>

                            <svg onMouseOver={() => handleMouseOver('.NET')} className='m-2 m-sm-3 m-md-4 m-lg-4 m-xl-3 m-xxl-3' id="dotnet-icon" viewBox="0 0 128 128">
                                <g fill="#623697">
                                    <path
                                        d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0">
                                    </path>
                                    <path
                                        d="M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0">
                                    </path>
                                </g>
                            </svg>

                            <svg onMouseOver={() => handleMouseOver('Javascript')} className='m-2 m-sm-3 m-md-4 m-lg-4 m-xl-3 m-xxl-3' id="js-icon" viewBox="0 0 128 128">
                                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                                <path fill="#323330"
                                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z">
                                </path>
                            </svg>

                            <svg onMouseOver={() => handleMouseOver('Bootstrap')} className='m-2 m-sm-3 m-md-4 m-lg-4 m-xl-3 m-xxl-3' id="bootstrap-icon" viewBox="0 0 128 128">
                                <defs>
                                    <linearGradient id="bootstrap-original-a" x1="76.079" x2="523.48" y1="10.798"
                                        y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9013fe" offset="0"></stop>
                                        <stop stop-color="#6610f2" offset="1"></stop>
                                    </linearGradient>
                                    <linearGradient id="bootstrap-original-b" x1="193.51" x2="293.51" y1="109.74"
                                        y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff" offset="0"></stop>
                                        <stop stop-color="#f1e5fc" offset="1"></stop>
                                    </linearGradient>
                                    <filter id="bootstrap-original-c" x="161.9" y="135.46" width="197" height="249"
                                        color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                                        </feColorMatrix>
                                        <feOffset dy="4"></feOffset>
                                        <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0">
                                        </feColorMatrix>
                                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                    </filter>
                                </defs>
                                <path
                                    d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                                    fill="url(#bootstrap-original-a)"></path>
                                <path transform="translate(1.494 2.203) scale(.24566)"
                                    d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                                    fill="url(#bootstrap-original-b)" filter="url(#bootstrap-original-c)" stroke="#fff">
                                </path>
                            </svg>

                            <svg onMouseOver={() => handleMouseOver('Git')} className='m-2 m-sm-3 m-md-4 m-lg-4 m-xl-3 m-xxl-3' id="git-icon" viewBox="0 0 128 128">
                                <path fill="#F34F29"
                                    d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z">
                                </path>
                            </svg>

                            <svg onMouseOver={() => handleMouseOver('MySQL')} className='m-2 m-sm-3 m-md-4 m-lg-4 m-xl-3 m-xxl-3' id="mysql-icon" viewBox="0 0 128 128">
                                <path fill="#00618A"
                                    d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219z">
                                </path>
                                <path fill="#E48E00"
                                    d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.434-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288z">
                                </path>
                                <path fill="#00618A"
                                    d="M122.336 66.952c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z">
                                </path>
                            </svg>

                            <svg onMouseOver={() => handleMouseOver('SQL Server')} className='m-2 m-sm-3 m-md-4 m-lg-4 m-xl-3 m-xxl-3' id="sqlserver-icon" viewBox="0 0 128 128">
                                <path fill="#000000"
                                    d="M75.39 15.31c-.2.06-1.25.41-2.36.77-5.94 1.94-10.15 4.19-11.19 5.98-.4.68-.47 1.24-.24 1.79.26.62.74 1.1 2.06 2.03.62.44 1.67 1.34 2.36 2.02 3.27 3.26 4.85 7.26 4.67 11.78-.2 5.09-2.59 10.18-7.15 15.26-1.59 1.78-3.23 3.26-6.36 5.77-2.61 2.09-4.03 3.45-5 4.76-2.97 4.04-2.17 7.64 2.35 10.65 3.99 2.66 11.02 4.87 19.32 6.07 2.78.4 5.92.66 6.68.55l.53-.08.83-1.5c4.21-7.57 6.33-14.72 6.59-22.11.11-3.3-.3-7.2-1.01-9.48-.13-.41-.22-.76-.21-.77.01-.01 1.19-.37 2.61-.79 7.49-2.23 14.74-3.99 20.73-5.03 1.17-.2 2.16-.41 2.21-.46.32-.31-.61-1.77-2.13-3.33-5.6-5.78-15.5-10.18-27.12-12.06-2.24-.36-2.51-.49-3.34-1.59-1.32-1.75-2.56-4.73-4.25-10.2-.05-.18-.1-.18-.58-.03zm.77 2.06c.65 1.78 1.05 3.17 1.05 3.66v.39l-.55-.06c-2.99-.35-7.77-1.09-8.79-1.36-.26-.07-.41-.17-.36-.25.08-.12 1.09-.61 4.11-1.98 2.81-1.28 3.88-1.75 3.97-1.76.04-.01.29.61.57 1.36zm-6.33 3.75c3.65.77 6.32 1.25 6.9 1.25.57 0 .51.05-2.18 1.69-2.07 1.26-2.31 1.38-2.83 1.38h-.57l-1.54-1.55c-1.86-1.88-3.12-3.26-3.12-3.42 0-.06.04-.08.09-.05.05.01 1.52.33 3.25.7zm-2.7 1.73c.9 1.05 1.59 1.93 1.55 1.96-.08.07-2.64-.56-4.2-1.04-1.37-.42-1.53-.56-1.17-1.03.24-.31 2-1.78 2.13-1.79.04 0 .79.85 1.69 1.9zm11.66 2.16c.36.85.63 1.54.62 1.55-.02.01-4.82-.73-5.24-.81-.09-.02.72-.57 1.82-1.24s2.02-1.17 2.07-1.12c.05.05.37.77.73 1.62zm-10.47 1.62c.09.09 1.24 3.78 1.19 3.83-.02.02-.56-.61-1.21-1.41-.65-.8-1.63-1.93-2.2-2.51l-1.02-1.07 1.58.55c.88.29 1.62.57 1.66.61zm4.59.49c1.99.28 3.64.54 3.67.57.03.03-1.18.97-2.67 2.08-1.5 1.11-2.73 2.01-2.75 1.99-.02-.02-.17-.48-.34-1.04-.17-.55-.59-1.7-.94-2.56-.35-.86-.63-1.56-.61-1.56.01 0 1.65.24 3.64.52zm5 1.59c.44 1.03.61 2.01.68 3.98.04 1.06.04 1.92.01 1.92-.04 0-.67-.22-1.4-.48-1.46-.53-4.32-1.47-4.66-1.54-.15-.03.54-.69 2.36-2.25 1.41-1.22 2.61-2.21 2.67-2.21.05 0 .2.26.34.58zm5.13.25c2.2.45 4.13.85 4.28.89.22.05-.31.38-2.64 1.66-1.6.88-3.42 1.88-4.04 2.23-.62.35-1.14.62-1.15.61-.01-.01.05-.34.14-.73.33-1.43.12-3.21-.54-4.63-.19-.41-.35-.78-.35-.8.01-.11.41-.03 4.3.77zm6.01 2.69c-.11.5-.36 1.35-.55 1.9-.42 1.21-1.96 4.36-2.17 4.44-.08.03-.81-.3-1.6-.74s-1.94-1.02-2.54-1.29l-1.1-.49 4.03-2.59c3.34-2.14 4.04-2.55 4.08-2.36.03.13-.04.63-.15 1.13zm2.95-.92c4.18 1.2 8.6 2.82 8.34 3.06-.05.05-.6.23-1.21.4-3.16.89-7.55 2.41-9.6 3.32-.64.28-1.19.49-1.22.45-.03-.03.22-.95.56-2.05.66-2.16 1.43-5.07 1.43-5.44 0-.16.06-.22.21-.18.1.04.77.24 1.49.44zm-17.99 4.34c.95.31 2.07.74 2.48.95.74.37.75.38.54.61-.38.42-4.53 4.29-4.65 4.33-.06.02-.11-.56-.11-1.41 0-1.47-.17-4.13-.3-4.72-.1-.45-.02-.44 2.04.24zm26.56.77c-.91 1.51-2.42 3.66-3.5 5.02-1.11 1.39-3.46 4-3.6 4-.05 0-.39-.42-.76-.94-1.34-1.91-2.89-3.56-4.25-4.52-.13-.09-.21-.19-.18-.22s2.26-.85 4.95-1.83c5.44-1.97 7.84-2.77 7.99-2.67.02.01-.27.53-.65 1.16zm3.4-.26c3.76 2.62 6.31 4.74 7.23 6.01.23.32.4.59.38.61-.02.02-1.23.15-2.69.3-5.83.57-9.98 1.16-12.18 1.72-.59.15-1.08.26-1.09.25-.01-.01.38-.49.87-1.08 2.54-3.05 4.84-6.22 5.69-7.87.23-.44.45-.79.49-.79.05 0 .63.38 1.3.85zm-21.04 3.25c.72.39 1.27.74 1.24.8-.06.11-6.39 3.58-6.45 3.53-.01-.01.31-1.05.73-2.32.42-1.27.82-2.65.9-3.07l.14-.77 1.07.57c.59.31 1.65.87 2.37 1.26zm-5.31.2c-.61 2.12-1.85 4.86-2.42 5.33-.13.11-.39-.04-1.22-.72-.59-.47-1.19-.94-1.35-1.05-.15-.11-.27-.22-.24-.25.44-.43 5.48-4.5 5.51-4.44.01.04-.11.55-.28 1.13zm11.48 3.69c.95.64 3.07 2.53 2.96 2.65-.03.03-2.18.73-4.77 1.55-2.59.82-5.48 1.75-6.42 2.06-.94.32-1.72.56-1.73.55-.01-.01.65-.76 1.46-1.67 2.12-2.37 4.3-4.9 5.08-5.9l.67-.86.87.47c.47.26 1.32.78 1.88 1.15zm-4.91-1.36c-.06.08-.63.8-1.27 1.61s-2.18 2.78-3.42 4.38l-2.26 2.91-.07-.49c-.14-.95-.65-2.82-.94-3.45l-.29-.64 1.44-.72c1.48-.74 4.58-2.42 6.03-3.27.89-.52.95-.55.78-.33zm-12 3.52c.59.3 1.14.7 1.14.82 0 .19-3.83 3.15-3.94 3.04-.02-.03.32-.71.77-1.52s.9-1.72 1.01-2.03c.11-.31.27-.56.36-.56.09-.01.38.11.66.25zm3.26 3.64c.26.52.54 1.97.4 2.1-.06.05-1.64.8-3.52 1.67-1.88.86-4.33 2.02-5.45 2.58s-1.97.95-1.88.88c.08-.07 1.31-1.11 2.74-2.29 2.76-2.29 5.9-5.03 6.47-5.64l.35-.37.34.32c.18.18.43.52.55.75zm-3.09-.03c-.27.25-1.75 1.53-3.27 2.85s-3.35 2.91-4.06 3.53c-1.44 1.25-1.44 1.25.4-1.14 1.42-1.85 2.16-2.54 4.2-3.91.99-.66 2.96-1.78 3.16-1.78.03 0-.16.2-.43.45zm14.27 1.26c.07.39.17 1.6.21 2.68l.07 1.97-.46-.21c-1.58-.73-6.02-3.23-5.85-3.3.97-.39 5.76-1.98 5.82-1.92.04.04.14.39.21.78zm-3.76 3.53c1.85 1.09 3.38 1.99 3.4 2.01.02.02-.22.22-.52.44-.59.43-6.85 3.67-6.94 3.59-.03-.03.06-.57.19-1.19.26-1.26.48-5.02.38-6.21-.04-.42-.02-.72.04-.68.04.03 1.6.95 3.45 2.04zm-5.11-.8c.14 1.17-.03 3.52-.35 4.75-.37 1.44-.59 2.04-.75 2.09-.22.07-1.59-1.17-2.42-2.21-.84-1.05-1.95-3.02-1.78-3.18.1-.1 4.98-2.11 5.14-2.11.04-.01.11.29.16.66zm-5.99 2.94c.52 1.07 1.7 2.61 2.99 3.92.83.84 1.04 1.11.91 1.2-.58.39-3.18 1.61-4.82 2.25-1.99.78-4.58 1.68-4.64 1.6-.02-.03.57-1.11 1.32-2.4 1.62-2.81 3.67-6.8 3.67-7.13.01-.41.18-.24.57.56zm-3.07.07c-.03.08-.28.7-.55 1.38-1.15 2.92-3.39 6.89-3.89 6.89-.39 0-.96-2.31-1.12-4.53l-.08-1.12 2.74-1.38c1.51-.76 2.79-1.38 2.85-1.38.06-.01.08.06.05.14zm18.29 2.7c.01 1.68-.69 5.75-1.07 6.16-.16.17-1.89-.47-3.46-1.28-1.4-.72-3.71-2.15-3.71-2.3 0-.04.35-.22.79-.4.83-.35 4.7-2.42 6.34-3.39l.94-.56.08.43c.04.24.08.85.09 1.34zm-25.81 1.94c.16 1.33.57 2.96 1.08 4.25.21.53.36.99.33 1.01-.2.18-8.43 2.45-9.52 2.62l-.52.08.08-.4c.11-.57.91-2.19 1.5-3.07.74-1.09 2.56-2.92 3.76-3.77.9-.63 3.06-1.9 3.12-1.82.04.01.1.5.17 1.1zm18.67 2.81c2.54 1.22 3.5 1.64 4.72 2.06l.93.32-.59.3c-3.33 1.69-9.23 4.09-10.75 4.39-.34.07-.39.05-.32-.12.26-.68 3.78-7.95 3.85-7.95.04 0 1.02.45 2.16 1zm-4.47-.27c-.18.86-1.15 3.63-1.71 4.89-.49 1.1-1.62 3.23-1.82 3.43-.09.09-2.1-1.04-3.05-1.72-1.07-.76-3.41-3.02-3.34-3.23.03-.08 1.45-.63 3.17-1.22 3.62-1.25 5.64-2 6.23-2.31.56-.3.61-.28.52.16zm10.12 3.82c-.03.25-.24 1.34-.46 2.45-.69 3.46-1.53 5.83-2.06 5.83-.74 0-5.78-1.22-7.41-1.8-1.11-.39-2.06-.84-2.38-1.11-.2-.17-.09-.23 1.35-.82 4.66-1.9 10.04-4.33 10.62-4.79.35-.28.4-.24.34.24zm-23.6 1.06c-.53.95-1.61 2.51-3.68 5.3l-1.76 2.38-.53-.38c-.74-.53-1.92-1.81-2.41-2.62-.53-.87-.89-1.95-.93-2.77l-.03-.64.87-.09c1.18-.12 4.49-.8 6.84-1.42 1.07-.28 1.96-.49 1.98-.48.01.03-.14.35-.35.72zM67.03 70c.59.42 1.4.96 1.81 1.2l.75.44-.34.14c-.19.08-2.93 1.08-6.1 2.22-5.41 1.95-5.76 2.07-5.91 1.87-.09-.12-.15-.24-.14-.28.01-.04 1.47-1.93 3.25-4.2l3.23-4.13 1.19.99c.67.55 1.67 1.33 2.26 1.75zm1.33 6.21c-1.18 1.77-2.18 3.26-2.22 3.3-.09.12-1.98-.32-3.39-.8-1.48-.5-3.31-1.42-4.03-2.04l-.52-.45 1.17-.32c4.77-1.3 11.08-2.97 11.11-2.95.02.02-.94 1.49-2.12 3.26zm5.67-2.68c2.53.87 4.83 1.36 7.82 1.68l.82.09-2.23.8c-5.56 2.01-10.07 3.42-12.33 3.86-.64.12-1.22.23-1.28.23-.06 0 .39-.62 1.01-1.38 1.7-2.07 3.54-4.43 4.03-5.16.24-.35.48-.65.53-.65.06.01.79.24 1.63.53zm8.29 4.68c-.96 2.47-1.66 3.98-1.9 4.07-.47.18-7.04-.78-9.05-1.33-1.33-.36-2.18-.71-1.93-.8.1-.03 1.05-.26 2.12-.5 3.47-.78 8.77-2.39 10.97-3.33.28-.12.53-.21.55-.19.02.02-.32.95-.76 2.08zM43.47 80.3c-.47.2-.69.59-.74 1.32-.05.68-.05.69-.39.69s-.35.02-.31.5c.03.45.07.5.36.54l.32.04v3.66l.55-.05.56-.04.04-1.8.04-1.8h1.64v1.32c0 1.64.17 2.07.88 2.31.32.11.62.13.94.06.45-.09.47-.12.51-.6l.04-.51-.39.07c-.68.12-.72.04-.7-1.62l.01-1.02h.34c.59 0 .72-.11.72-.6v-.46h-1.06v-.44c0-.65-.11-.76-.72-.72l-.52.03-.04.56-.04.56h-1.63v-.4c0-.55.29-.82.79-.72.38.07.39.07.39-.32 0-.21-.07-.46-.14-.54-.16-.14-1.1-.16-1.45-.02zM17.41 80.49c-.51.36-.26 1.11.38 1.11.66 0 .78-.09.78-.6-.01-.65-.59-.91-1.16-.51zM8.75 80.81c-.18.13-.2.43-.17 3.15l.03 3 .56.04.56.04v-2.61c0-1.44.03-2.59.06-2.56.04.03.38.98.77 2.11s.79 2.28.89 2.56l.19.51.59-.05.59-.04.9-2.5.9-2.5.06 2.5c.04 1.38.08 2.52.09 2.54.01.02.28.02.58 0l.56-.04.03-2.99c.02-2.11-.01-3.04-.11-3.16-.21-.26-1.54-.21-1.78.06-.1.12-.52 1.09-.92 2.15-.4 1.06-.76 1.97-.8 2.02-.04.05-.39-.8-.78-1.88-.39-1.1-.82-2.08-.97-2.23-.21-.21-.39-.27-.95-.27-.37 0-.77.07-.88.15zM20.87 82.31c-.86.28-1.37 1.17-1.37 2.42 0 1.4.53 2.16 1.65 2.35.51.09 1.38-.11 1.68-.38.2-.18.29-.85.13-1-.04-.04-.26.03-.49.16-.85.46-1.48.2-1.68-.69-.13-.59.01-1.35.32-1.68.25-.27.87-.29 1.35-.04.45.23.58.15.58-.37 0-.29-.07-.45-.28-.58-.36-.25-1.42-.34-1.89-.19zM25.46 82.55c-.41.36-.41.36-.45.09-.03-.23-.11-.28-.54-.31l-.5-.04v4.72h1.18v-1.46c0-1.46 0-1.46.35-1.84.29-.31.42-.37.77-.33.44.05.53-.05.53-.6 0-.68-.68-.8-1.34-.23zM28.72 82.33c-.95.28-1.53 1.39-1.41 2.7.11 1.21.73 1.9 1.85 2.06 1.98.27 3.27-1.35 2.71-3.39-.34-1.2-1.7-1.8-3.15-1.37zm1.38.92c.62.33.78 1.77.27 2.45-.32.42-1.03.5-1.46.16-.26-.21-.28-.31-.28-1.19 0-.91.02-.98.33-1.25.34-.3.78-.36 1.14-.17zM33.58 82.36c-.6.26-.82.61-.82 1.26 0 .7.22.96 1.27 1.46.6.29.73.4.73.65 0 .21-.09.33-.33.41-.3.1-.58.05-1.53-.25-.18-.06-.21-.01-.18.39.03.38.1.49.39.63.49.24 1.67.22 2.16-.04.71-.38.93-1.53.41-2.11-.12-.13-.55-.4-.98-.6-.78-.37-.97-.64-.7-.96.18-.21.71-.21 1.24.01.35.15.42.15.48.01.12-.32-.02-.7-.31-.85-.39-.21-1.39-.21-1.83-.01zM38.35 82.28c-1.04.37-1.51 1-1.61 2.12-.12 1.38.38 2.26 1.46 2.58 1.81.53 3.22-.52 3.21-2.39-.01-1.13-.52-1.96-1.4-2.26-.41-.14-1.34-.17-1.66-.05zm1.37 1.14c.31.26.33.34.33 1.17 0 .78-.03.92-.29 1.19-.37.39-1.07.42-1.42.07-.3-.3-.39-.69-.32-1.5.04-.53.12-.71.37-.94.42-.36.91-.35 1.33.01zM17.29 84.63l.03 2.34h1.18v-4.6l-.62-.03-.62-.04.03 2.33zM11.66 89.91c-1.51.33-2.65 1.16-3.25 2.39-.37.75-.39.86-.39 2.08 0 1.18.03 1.36.32 1.96.63 1.29 1.79 2.2 4.21 3.3 2.64 1.2 3.36 1.94 3.36 3.47 0 1.39-.65 2.22-2.08 2.66-1.42.44-2.84.23-4.68-.69-.61-.31-1.16-.58-1.2-.6-.05-.02-.16.05-.27.15-.22.23-.26 1.37-.05 1.75.44.83 2.75 1.6 4.76 1.6 3.78 0 6.22-2.25 6.02-5.56-.04-.72-.13-1.07-.43-1.67-.59-1.19-1.35-1.81-3.66-2.94-1.07-.52-2.24-1.15-2.61-1.4-1.46-.98-1.8-2.65-.77-3.81.57-.65 1.15-.86 2.34-.87 1.13 0 1.59.12 2.89.78 1.12.57 1.22.52 1.22-.59 0-1-.06-1.09-1.08-1.56-1.35-.59-3.16-.77-4.65-.45zM27.42 89.84c-2.23.36-3.95 1.44-5.1 3.21-.58.9-.9 1.74-1.2 3.16-.33 1.55-.25 5 .14 6.42.96 3.49 3.11 5.17 6.79 5.33 1.94.08 2.69-.06 4.59-.87.07-.03.39.17.71.44 1.22 1.06 3.9 2.58 4.84 2.76.58.11.74-.08.74-.9 0-.38-.03-.77-.07-.88-.04-.11-.6-.46-1.26-.79-1.01-.5-3.03-1.8-3.03-1.95 0-.03.19-.29.41-.59.95-1.24 1.52-2.97 1.72-5.21.15-1.71.01-3.54-.38-4.96-.71-2.57-2.44-4.34-4.88-5-.81-.2-3.13-.31-4.02-.17zm3.54 2.25c1.4.52 2.33 1.58 2.87 3.23.27.83.32 1.21.37 2.97.07 2.36-.11 3.5-.73 4.82-.99 2.12-3.16 3.18-5.69 2.79-3.14-.48-4.52-2.85-4.36-7.5.09-2.67.57-4.07 1.81-5.25.73-.7 1.26-1.01 2.11-1.22.98-.26 2.72-.18 3.62.16zM59.29 89.92c-1.45.35-2.68 1.25-3.21 2.33-.6 1.24-.62 2.99-.05 4.12.67 1.33 1.57 2.02 4.37 3.35 2.12 1.01 2.83 1.6 3.12 2.59.34 1.17-.1 2.39-1.08 3.03-1.53.99-3.71.83-6.04-.44-1.05-.57-1.2-.51-1.2.5 0 .94.13 1.22.77 1.59 1.97 1.16 5.25 1.31 7.29.35 2.46-1.16 3.57-4.21 2.41-6.63-.15-.31-.57-.85-.95-1.22-.58-.57-1.04-.85-2.98-1.8-3.22-1.58-3.86-2.26-3.67-3.87.1-.8.52-1.39 1.26-1.76.51-.26.79-.31 1.57-.31 1.16 0 1.63.12 2.8.72 1 .51 1.21.55 1.32.27.14-.35.07-1.52-.1-1.77-.23-.32-1.4-.84-2.39-1.05s-2.35-.22-3.24 0zM40.96 90.11c-.11.11-.14 2.18-.14 8.6v8.46l.29.29.29.29h4.18c3.2 0 4.2-.04 4.3-.15.18-.23.26-.92.16-1.38l-.09-.41-3.35-.06-3.35-.06-.03-7.77c-.02-6.03-.06-7.79-.17-7.86-.25-.14-1.93-.11-2.09.05zM72.39 94.53c-.57.09-1.71.54-2.18.86-1.13.77-1.93 2-2.38 3.65-.28 1.05-.28 3.64 0 4.71.58 2.19 1.86 3.52 3.9 4.06.89.23 3.14.23 4.24 0 1.04-.22 2.12-.62 2.32-.85.19-.22.18-1.41-.01-1.6-.1-.1-.41-.03-1.24.25-3.19 1.08-5.65.61-6.6-1.26-.28-.55-.54-1.65-.54-2.27v-.33h4.05c2.56 0 4.18-.05 4.41-.13.52-.18.66-.63.57-1.79-.18-2.3-.95-3.74-2.46-4.65-.96-.58-2.74-.87-4.08-.65zm2.16 1.85c1.2.36 1.94 1.38 2.05 2.79l.06.81h-6.78l.08-.49c.21-1.22.72-2.13 1.51-2.67.89-.61 2-.77 3.08-.44zM86.14 94.56c-.56.18-1.37.83-1.95 1.56l-.56.72-.06-1.05-.06-1.05-.7-.04c-.39-.02-.82-.01-.97.03l-.27.06v6.41c0 5.74.02 6.41.19 6.48.24.09 1.63.09 1.86 0 .17-.06.19-.55.19-4.25v-4.18l.52-.73c.71-1 1.63-1.81 2.16-1.91.28-.05.72-.01 1.24.12.51.13.85.16.92.09.06-.06.1-.54.08-1.04-.03-.9-.05-.94-.38-1.09-.41-.2-1.76-.28-2.21-.13zM106.42 94.57c-.93.16-2.25.84-2.93 1.52-1.29 1.29-1.83 3.07-1.74 5.71.08 2.38.52 3.56 1.77 4.73 1.19 1.13 2.45 1.5 4.73 1.43 1.67-.06 3.17-.39 3.86-.85.34-.23.38-.32.41-.9.02-.35-.02-.72-.08-.82-.12-.19-.02-.21-2.01.42-.81.25-1.24.31-2.24.32-1.98.01-3-.52-3.67-1.88-.28-.57-.38-.97-.43-1.63l-.06-.87 4.24-.03c5.09-.04 4.75.07 4.74-1.5-.01-2.76-1.2-4.68-3.35-5.43-.78-.26-2.35-.37-3.24-.22zm2.22 1.82c1.17.35 1.94 1.39 2.1 2.86l.08.73h-6.78l.07-.59c.17-1.44 1.16-2.68 2.44-3.07.49-.15 1.45-.11 2.09.07zM120.32 94.55c-.76.25-1.81 1.13-2.39 2-.19.29-.2.27-.2-.65 0-.58-.05-1-.14-1.08-.19-.19-1.65-.19-1.84 0-.2.2-.2 12.59 0 12.79.19.19 1.88.19 2.07 0 .1-.1.14-1.22.14-4.27v-4.13l.44-.65c.65-.97 1.47-1.73 2.04-1.9.49-.15.68-.13 1.99.21.37.1.48-.11.48-.9 0-.88-.08-1.12-.45-1.29-.38-.17-1.75-.26-2.14-.13zM89 94.86c-.12.15.24 1.25 2.06 6.33 1.21 3.38 2.3 6.25 2.42 6.38.45.46 2.68.35 2.88-.14.15-.39 4.28-11.86 4.36-12.13.14-.47-.11-.61-1.12-.61-.59 0-.96.05-1.03.15-.06.08-.9 2.47-1.86 5.31-.96 2.84-1.78 5.12-1.83 5.06-.05-.05-.87-2.37-1.82-5.16s-1.79-5.13-1.86-5.22c-.18-.23-2.02-.2-2.2.03z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    <div id="icon-name" style={{ opacity: opacidade }} className="display-5 d-lg-block d-xl-block text-center text-dark mb-5">{texto}</div>
                </div>

            </div>
        </div>
    )
}
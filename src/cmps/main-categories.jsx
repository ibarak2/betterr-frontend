import { NavLink } from "react-router-dom";


export function MainCategories() {

    //---- component rendering ----//
    return (
        <div className="main-container main-categories">
            <h2>Explore the marketplace</h2>
            <ul className="flex clean-list categories-list">

                <li className="categories-list-item">
                    <NavLink to="/explore?category=graphics-and-design">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/graphics-design_bqrdh5.svg" alt="" />
                            Graphics & Design
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=digital-marketing">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/online-marketing_grviaq.svg" alt="" />
                            Digital Marketing
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=writing-and-translation">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/writing-translation_ziit5b.svg" alt="" />
                            Writing & Translation
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=video-and-animation">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/video-animation_mynund.svg" alt="" />
                            Video & Animation
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=music-and-audio">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/music-audio_aze6yn.svg" alt="" />
                            Music & Audio
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=programming-and-tech">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/programming_muazri.svg" alt="" />
                            Programming & Tech
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=business">
                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/business_rztlok.svg" alt="" />
                            Business
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=lifestyle">

                        <a className="categories-link">
                            <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189947/Fiverr-Sprint-4/imgs/icons/lifestyle_xd4pka.svg" alt="" />
                            Lifestyle
                        </a>
                    </NavLink>
                </li>

                <li className="categories-list-item">
                    <NavLink to="/explore?category=business">
                        <a className="categories-link">
                            <div className="data-icon">
                                <img className="categories-img" src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663189945/Fiverr-Sprint-4/imgs/icons/data_xgawq7.svg" alt="" />
                            </div>
                            Data
                        </a>
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}
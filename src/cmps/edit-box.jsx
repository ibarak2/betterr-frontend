import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { uploadService } from "../services/upload.service"





export const EditBox = ({ onSubmitEdit, gig, handleChange, setGig, onAddingImg }) => {






    // const [categoryOpen, setCategorysOpen] = useState(false)
    // const categories = [
    //     { value: "graphics-and-design", txt: "Graphics & Design" },
    //     { value: "digital-marketing", txt: "Digital Marketing" },
    //     { value: "writing-and-translation", txt: "Writing & Translation" },
    //     { value: "video-and-animation", txt: "Video & Animation" },
    //     { value: "music-and-audio", txt: "Music & Audio" },
    //     { value: "programming-and-tech", txt: "Programming & Tech" },
    //     { value: "business", txt: "Business" },
    //     { value: "lifestyle", txt: "Lifestyle" }
    // ]
    // const showModal = () => {
    //     setCategorysOpen(!categoryOpen)
    // }
    // const handleSelect = (ev) => {
    //     setCategorysOpen(!categoryOpen)
    //     handleChange({ value: ev, name: "category" })
    // }

    return (
        <div className="edit-first-stage">

            <div className="gig-title form-input-group">
                <div className="input-label">
                    <label><span>Gig title</span></label>
                    <div className="label-description">
                        As your Gig storefront, your
                        <b> title is the most important place </b>
                        to include keywords that buyers would likely use to search for a service like yours.
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="gig-title-input">
                        <span className="title-prefix">I will</span>
                        <textarea
                            required
                            placeholder="do something I'm really good at"
                            name="title"
                            value={gig.title}
                            onChange={handleChange}
                        />

                    </div>
                </div>

            </div>
            <div className="gig-category form-input-group">
                <div className="input-label">
                    <label><span>Category</span></label>
                    <div className="label-description">
                        Choose the category and sub-category most suitable for your Gig.
                    </div>
                </div>
                <div className="input-wrapper">
                    <select name="category" value={gig.category} onChange={handleChange}>
                        <option value="">Choose Category</option>
                        <option value="graphics-and-design">Graphics & Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="writing-and-translation">Writing & Translation</option>
                        <option value="video-and-animation">Video & Animation</option>
                        <option value="music-and-audio">Music & Audio</option>
                        <option value="programming-and-tech">Programming & Tech</option>
                        <option value="business">Business</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>
                </div>
            </div>
            <hr />
            <div className="gig-description">
                <header className="description-header">
                    <h3>Description</h3>
                    <p>Briefly Describe Your Gig</p>
                </header>
                <div className="description-editor">
                    <textarea
                        placeholder="Description"
                        name="description"
                        value={gig.description}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <hr />
            <div className="pricing">
                <header className="pricing-header">
                    <h3>Scope & Pricing</h3>
                </header>
                <section className="packages-pricing">
                    <header>
                        <span>Packages</span>
                    </header>
                    <div className="packages-container">
                        <table>
                            <thead>
                                <tr>
                                    <th className="table-plans">Plans</th>
                                    <th>Basic</th>
                                    <th>Standard</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="plans-titles first-table-col">Title</td>
                                    <td>
                                        <div className="block-container">
                                            <textarea
                                                name="basicTitle"
                                                className="block-container-input"
                                                placeholder="Name your package"
                                                value={gig.basicTitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea
                                                name="standardTitle"
                                                className="block-container-input"
                                                placeholder="Name your package"
                                                value={gig.standardTitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea
                                                name="premiumTitle"
                                                className="block-container-input"
                                                placeholder="Name your package"
                                                value={gig.premiumTitle}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="plans-titles first-table-col">Description</td>
                                    <td>
                                        <div className="block-container">
                                            <textarea
                                                name="basicDescription"
                                                value={gig.basicDescription}
                                                onChange={handleChange}
                                                className="block-description-input"
                                                placeholder="Describe the details of your offering"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea
                                                name="standardDescription"
                                                value={gig.standardDescription}
                                                onChange={handleChange}
                                                className="block-description-input"
                                                placeholder="Describe the details of your offering"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea
                                                name="premiumDescription"
                                                value={gig.premiumDescription}
                                                onChange={handleChange}
                                                className="block-description-input"
                                                placeholder="Describe the details of your offering"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="plans-titles first-table-col">Price</td>
                                    <td>
                                        <div className="block-price-cell">
                                            <input
                                                name="basicPrice"
                                                value={gig.basicPrice}
                                                onChange={handleChange}
                                                className="fit-input"
                                                type="number"
                                                step="5"
                                                min="5"
                                                max="10000"
                                            /><span>$</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-price-cell">
                                            <input
                                                name="standardPrice"
                                                value={gig.standardPrice}
                                                onChange={handleChange}
                                                className="fit-input"
                                                type="number"
                                                step="5"
                                                min="5"
                                                max="10000"
                                            /><span>$</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-price-cell">
                                            <input
                                                name="premiumPrice"
                                                value={gig.premiumPrice}
                                                onChange={handleChange}
                                                className="fit-input"
                                                type="number"
                                                step="5"
                                                min="5"
                                                max="10000"
                                            /><span>$</span>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="plans-titles first-table-col">Days To Make</td>
                                    <td>
                                        <div className="block-days-cell">
                                            <input
                                                name="basicDaysToMake"
                                                value={gig.basicDaysToMake}
                                                onChange={handleChange}
                                                className="fit-input"
                                                type="number"
                                                step="1"
                                                min="1"
                                                max="31"
                                            />
                                            <span>days</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-days-cell">
                                            <input
                                                name="standardDaysToMake"
                                                value={gig.standardDaysToMake}
                                                onChange={handleChange}
                                                className="fit-input"
                                                type="number"
                                                step="1"
                                                min="1"
                                                max="31"
                                            />
                                            <span>days</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-days-cell">
                                            <input
                                                name="premiumDaysToMake"
                                                value={gig.premiumDaysToMake}
                                                onChange={handleChange}
                                                className="fit-input"
                                                type="number"
                                                step="1"
                                                min="1"
                                                max="31"
                                            />
                                            <span>days</span>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
            <hr />
            <div className="upload-container">
                <header>
                    <h3>Showcase Your Services In A Gig Gallery</h3>
                    <p>Encourage buyers to choose your Gig by featuring a variety of your work.
                    </p>
                    <h5>Images (Add at least 3 beautiful images)</h5>
                    <p>Get noticed by the right buyers with visual examples of your services.</p>
                </header>
                <section className="uploader-input">

                    <div className="upload-input-container">
                        <label htmlFor="img1">Browse</label>
                        <input
                            hidden
                            className="img-input"
                            type="file"
                            name="img1"
                            id="img1"
                            accept="image/*"
                            onChange={(ev) => onAddingImg(ev)}
                        />
                        <img className="thumbnail" src={gig.img1} ></img>
                    </div>

                    <div className="upload-input-container">
                        <label htmlFor="img2">Browse</label>
                        <input
                            hidden
                            className="img-input"
                            type="file"
                            name="img2"
                            id="img2"
                            accept="image/*"
                            onChange={(ev) => onAddingImg(ev)}
                        />
                        <img className="thumbnail" src={gig.img2} ></img>

                    </div>

                    <div className="upload-input-container">
                        <label htmlFor="img3">Browse</label>
                        <input
                            hidden
                            className="img-input"
                            type="file"
                            name="img3"
                            id="img3"
                            accept="image/*"
                            onChange={(ev) => onAddingImg(ev)}
                        />
                        <img className="thumbnail" src={gig.img3} ></img>

                    </div>

                </section>
            </div >
            <button onClick={() => onSubmitEdit(gig)}>Save</button>
        </div >
    )
}
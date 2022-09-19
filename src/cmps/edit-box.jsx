



export const EditBox = () => {




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
                    input
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
                    dropdown
                </div>
            </div>
            <hr />
            <div className="gig-description">
                <header class="description-header">
                    <h3>Description</h3>
                    <p>Briefly Describe Your Gig</p>
                </header>
                <div className="description-editon">
                    description
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
                                            <textarea class="block-container-input" maxlength="35" placeholder="Name your package"></textarea>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea class="block-container-input" maxlength="35" placeholder="Name your package"></textarea>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea class="block-container-input" maxlength="35" placeholder="Name your package"></textarea>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="plans-titles first-table-col">Description</td>
                                    <td>
                                        <div className="block-container">
                                            <textarea class="block-description-input" maxlength="100" placeholder="Describe the details of your offering"></textarea>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea class="block-description-input" maxlength="100" placeholder="Describe the details of your offering"></textarea>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-container">
                                            <textarea class="block-description-input" maxlength="100" placeholder="Describe the details of your offering"></textarea>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="plans-titles first-table-col">Price</td>
                                    <td>
                                        <div className="block-price-cell">
                                            <input class="fit-input" type="number" step="5" min="5" max="10000" value="" />
                                            <span>$</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-price-cell">
                                            <input class="fit-input" type="number" step="5" min="5" max="10000" value="" />
                                            <span>$</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="block-price-cell">
                                            <input class="fit-input" type="number" step="5" min="5" max="10000" value="" />
                                            <span>$</span>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
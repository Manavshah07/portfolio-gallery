const CategoryMenu = ({filterItem, categoryItem}) => {
    return (
        <>
            {
                categoryItem.map((currEle , index) => {
                    return <button className="btn btn-warning" key={index} onClick={() => filterItem(currEle)}>{currEle}</button>
                })
            }
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                </div>
            </div>
        </>
    )
}

export default CategoryMenu

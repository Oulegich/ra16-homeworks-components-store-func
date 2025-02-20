import IItem from "../interfaces/item.interface";

const ShopItemFunc: React.FC<{ item: IItem }> = ({ item }) => {


    const formatted = item.price.toFixed(2);

    return (
        <>
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                    {item.descriptionFull}
                </div>
                <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{item.currency}{formatted}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        </>
    )
}


export default ShopItemFunc
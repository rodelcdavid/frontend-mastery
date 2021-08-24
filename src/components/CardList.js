import Card from './Card'
import './CardList.css'

const CardList = ({archive}) => {
    const archiveRev = [...archive].reverse();
    const cardArray = archiveRev.map((item, i) => {
    return <Card key={archiveRev[i].id} title={archiveRev[i].title} date={archiveRev[i].date} link={archiveRev[i].link} />
    })

    return (
    <div className = 'cardlist'>
        {cardArray}
    </div>
    )
}

export default CardList;
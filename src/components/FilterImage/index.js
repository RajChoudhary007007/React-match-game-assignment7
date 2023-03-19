import './index.css'

const FilterImage = props => {
  const {projectDetails, matchingImageId} = props
  const {id, thumbnailUrl} = projectDetails

  const onClickMatchImage = () => {
    matchingImageId(id)
  }

  return (
    <li className="filter-image-container">
      <button className="image-btn" type="button" onClick={onClickMatchImage}>
        <img className="filter-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default FilterImage

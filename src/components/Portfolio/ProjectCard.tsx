// Types/Interfaces
import type { JSX } from "react"
import type { IProjectCard } from "../../interfaces/IProjectCard";
// Icons
import { FaRegEye } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";

const ProjectCard = ({ title, img, description, hasPreview, page, repository }: IProjectCard): JSX.Element => {

  return (
    <div className='project-div'>
      <h4 className='project-name'>{title}</h4>
      <figure className='project-fig'>
        <a
          className="project-cover-link"
          href={page}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={img} className='project-img' alt={title} />
        </a>
      </figure>
      <p className='project-description'>{description}</p>
      <div className="project-links-div">
        {hasPreview && (
          <a
            className='project-link' 
            href={page}
            rel='noopener noreferrer' 
            target='_blank'
          >
            Preview <FaRegEye className='project-link-icon' />
          </a>
        )}
        <a
          className='project-link'  
          href={repository}
          rel='noopener noreferrer' 
          target='_blank'
        >
          Repository <RiGitRepositoryLine className='project-link-icon' />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
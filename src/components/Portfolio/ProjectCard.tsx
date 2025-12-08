// Types/Interfaces
import type { JSX } from "react"
import type { IProjectCard } from "../../interfaces/IProjectCard";
// Icons
import { FaRegEye } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";

const btnSize: number = 20 as const

const ProjectCard = ({ className, title, img, description, hasPreview, page, repository }: IProjectCard): JSX.Element => {

  return (
    <div
      className={`project-div ${className}`}
      suppressHydrationWarning
    >
      <h4 className='project-name'>{title}</h4>
      <figure className='project-fig'>
        <a
          className="project-cover-link"
          href={hasPreview ? page : repository}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={img}
            className='project-img'
            alt={`${title} illustrative cover`}
            loading="lazy"
            decoding="async"
          />
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
            Preview <FaRegEye className='project-link-icon' size={btnSize} />
          </a>
        )}
        <a
          className='project-link'  
          href={repository}
          rel='noopener noreferrer' 
          target='_blank'
        >
          Repository <RiGitRepositoryLine className='project-link-icon' size={btnSize} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
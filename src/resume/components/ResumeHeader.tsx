import { useState } from 'react'
import Icon from '../../components/Icon'
import { PersonalDetails, SocialLinks } from '../resume-data'
import { cn } from '../../utils/cn'

export default function ResumeHeader() {
  const [imageFailed, setImageFailed] = useState(false)
  const initials = PersonalDetails.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <header className="resume-header">
      <div className="resume-header-shell">
        <div className="resume-avatar">
          {!imageFailed ? (
            <img
              src="/dp_profile.png"
              alt="Profile"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div className="resume-identity">
          <p className="resume-kicker">Curriculum Vitae</p>
          <h1 className="resume-name">{PersonalDetails.name}</h1>
          <p className="resume-role">{PersonalDetails.title}</p>
        </div>
        <div className="resume-links">
          <ul className="space-y-2">
            {SocialLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className={cn([
                    'flex items-center gap-2 text-sm text-white/90 transition hover:text-white',
                    'print:text-slate-800 print:hover:text-slate-900',
                  ])}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon icon={link.icon} className="h-4 w-4" />
                  <span>{link.display}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

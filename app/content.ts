export const services = [
  { title: 'Custom Home Design', intro: 'Explore a home shaped around your priorities.', body: 'Consider how you want to arrive, gather, work, rest, and spend time outdoors. These everyday experiences give a new home its direction.' },
  { title: 'Renovation Design', intro: 'Look at your existing home with fresh perspective.', body: 'What deserves to stay? What feels restrictive? Where could a different layout make daily life easier? A thoughtful renovation begins with those questions.' },
  { title: 'Design Packages', intro: 'Layouts, 3D concepts, and detailed drawings bring your ideas into focus.' },
  { title: 'Project Viability Studies', intro: 'Understand the possibilities before committing to a direction.' },
  { title: 'Site and Grading Plans', intro: 'Consider the building in relation to its property.' },
  { title: 'Onsite Consultations and Inspections', intro: 'Discuss your project with attention to conditions on site.' },
  { title: 'Architectural Printing', intro: 'Printed plans for reference, discussion, and review.' },
  { title: 'Municipal Consultations', intro: 'Guidance through local requirements and submission considerations.' },
];

export const steps = [
  { title: 'A Conversation', body: 'We meet with you to understand your ideas and explain the design considerations.' },
  { title: 'A Design to Explore', body: 'Layouts and 3D concepts help you review and refine the proposal.' },
  { title: 'Detailed Drawings', body: 'Following your approval, we prepare drawings to meet Ontario Building Code standards.' },
  { title: 'Municipal Submission', body: 'Our support continues through the permit process, drawing on local municipal experience to help anticipate requirements and avoid unnecessary delays.' },
];

export const living = [
  { title: 'A Sense of Welcome', body: 'Consider what you see and feel when you enter. A clear arrival, comfortable proportions, and a place for everyday belongings can make coming home feel effortless.' },
  { title: 'Space for Connection', body: 'Think about the relationship between cooking, dining, and relaxing. The right arrangement depends on how you like to spend time together.' },
  { title: 'Privacy When You Need It', body: 'Shared living benefits from places of retreat. Consider where a quiet room, a separate workspace, or a more private sleeping area would improve daily life.' },
  { title: 'A Relationship With Outdoors', body: 'Views, garden access, and places to sit outside can influence how a home feels throughout the year.' },
  { title: 'Room for Change', body: 'Think about how your needs may develop. A room used for work today might serve a different purpose in the future.' },
];

export const planning = [
  { title: 'Understand Your Property', body: 'The size of a property is only part of the picture. Local zoning can affect building height, setbacks, and lot coverage. Understanding these requirements early helps establish a realistic starting point.' },
  { title: 'Define Your Priorities', body: 'Separate the things your home needs from the things you would enjoy adding. Think about the changes that would make the greatest difference to daily life. This gives design discussions a clear purpose.' },
  { title: 'Consider the Whole Project', body: 'Your planning should account for more than construction alone. Design work, applications, surveys, specialist input, and unexpected conditions may all need consideration, depending on the project.' },
  { title: 'Bring What You Have', body: 'Existing drawings, property surveys, photographs, and inspiration images can help explain your starting point. You do not need every answer before beginning a conversation.' },
];

export const questions = [
  { title: 'Can I get in touch before I have a clear design?', body: 'Yes. Start with what you know about your home, your property, and what you would like to change. A few priorities and reference images can be enough to begin a useful discussion.' },
  { title: 'How soon can my project begin?', body: 'Contact us to discuss current availability and your intended schedule. The size of the project, the information available, and the decisions involved will help shape the next steps.' },
  { title: 'Will I need a building permit?', body: 'Many construction and renovation projects require a permit. The requirements depend on the proposed work. Confirm what applies with your local building department before construction begins.' },
  { title: 'Is building approval the same as zoning approval?', body: 'They address different requirements. A proposal may need to satisfy both building requirements and local zoning rules. Depending on the property, other approvals may also apply.' },
  { title: 'What information will the municipality need?', body: 'Requirements vary by project. Drawings, application details, and supporting documents may be needed. Clarington’s building staff can advise on required drawings, applicable requirements, and fees.' },
  { title: 'How long will municipal approval take?', body: 'Timing depends on the application, its completeness, and the approvals involved. Design preparation and municipal review are separate stages. Allow time for questions, revisions, and any additional information requested.' },
  { title: 'What should I include in my first enquiry?', body: 'Share the property location, the type of project, your main priorities, and your preferred timing. If you have a working budget or existing plans, mention those too.' },
];

export const images = {
  hero: { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/home-original.jpg`, alt: 'Residential concept rendering with stone walls, warm timber details, and a landscaped approach' },
  residence: { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/interior-original.jpg`, alt: 'Residential concept rendering with a sheltered entrance, tall windows, and a planted front garden' },
};

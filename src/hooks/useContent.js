import { useState, useEffect } from 'react';
import contentData from '../data/content.json';

export const useContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth transition
    const timer = setTimeout(() => {
      setContent(contentData);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const addProject = (newProject) => {
    if (content) {
      const updatedContent = {
        ...content,
        projects: [...content.projects, { ...newProject, id: Date.now() }]
      };
      setContent(updatedContent);
      // In a real app, you'd save this back to the JSON file or database
    }
  };

  const addExperience = (newExperience) => {
    if (content) {
      const updatedContent = {
        ...content,
        experience: [...content.experience, { ...newExperience, id: Date.now() }]
      };
      setContent(updatedContent);
    }
  };

  const addSkill = (category, newSkill) => {
    if (content && content.skills[category]) {
      const updatedContent = {
        ...content,
        skills: {
          ...content.skills,
          [category]: [...content.skills[category], newSkill]
        }
      };
      setContent(updatedContent);
    }
  };

  return {
    content,
    loading,
    addProject,
    addExperience,
    addSkill
  };
};

export default useContent;

import type { Settings } from '../../interfaces/settings.interfaces';

const elementSpecificStyles = ['color', 'backgroundColor', 'fontSize',"margin"] as const;

export const settings: Settings<typeof elementSpecificStyles> = {
  allowedStyles: elementSpecificStyles,
  defaultStyles: {
    color: '#000000',
    backgroundColor: '#ffffff',
    fontSize: '1rem',
    margin:"1rem",
  }
};

export default settings;

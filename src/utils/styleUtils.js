// Function to generate quadBox styles
export const createQuadBoxStyle = ({
  width = '45%',
  maxWidth = '500px',
  margin = '0 0 0 0',
  transform = 'skew(-10deg)',
  backgroundColor = '#E95420',
  border = '6px solid #000',
  zIndex = 1
} = {}) => ({
  position: 'relative',
  width,
  maxWidth,
  margin,
  padding: '2rem',
  backgroundColor,
  transform,
  color: '#fff',
  border,
  zIndex,
}); 
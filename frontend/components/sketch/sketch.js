import React, { useRef, useEffect } from 'react'

// adapted from: https://www.npmjs.com/package/intrinsic-scale
function getObjectFitSize(
  contains /* true = contain, false = cover */,
  containerWidth,
  containerHeight,
  width,
  height
) {
  var doRatio = width / height;
  var cRatio = containerWidth / containerHeight;
  var targetWidth = 0;
  var targetHeight = 0;
  var test = contains ? doRatio > cRatio : doRatio < cRatio;

  if (test) {
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
  } else {
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
  }

  return {
    width: targetWidth,
    height: targetHeight,
    x: (containerWidth - targetWidth) / 2,
    y: (containerHeight - targetHeight) / 2
  };
}

const Sketch = props => {

  // https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const originalHeight = canvas.height;
    const originalWidth = canvas.width;

    let dimensions = getObjectFitSize(
      true,
      canvas.clientWidth,
      canvas.clientHeight,
      canvas.width,
      canvas.height
    );

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
  
    let ratio = Math.min(
      canvas.clientWidth / originalWidth,
      canvas.clientHeight / originalHeight
    );

    ctx.scale(ratio * dpr, ratio * dpr); //adjust

    // const { width, height } = canvas.getBoundingClientRect()

    ctx.fillStyle = '#f2c319';
    const size = Math.min(originalWidth, originalHeight) * .25
    ctx.fillRect(
      originalWidth * .5 - size *.5, 
      originalHeight * .5 - size *.5, 
      size,
      size
    )

  }, [])

  return <canvas {...props} ref={canvasRef} style={{ width: '100%', minHeight: '100vh' }}/>

}

export default Sketch
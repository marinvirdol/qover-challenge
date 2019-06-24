import React from 'react'

function Logo({width = '85', height = '100'}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'block', margin: 'auto', marginBottom: '30px'}} width={width} height={height} viewBox="0 0 85 100">
      <g fill="#FFF" fillRule="evenodd">
          <path d="M11.567 93.056a9.865 9.865 0 0 1-3.44.652 7.627 7.627 0 0 1-6.713-3.944 8.481 8.481 0 0 1-1.027-4.167 9.302 9.302 0 0 1 .999-4.43 6.94 6.94 0 0 1 2.774-2.89 8.757 8.757 0 0 1 4.258-1h7.227v21.876h-4.078v-6.097zm-2.122-12.5c-3.264 0-4.897 1.74-4.897 5.222a4.948 4.948 0 0 0 1.207 3.486 4.159 4.159 0 0 0 3.232 1.32c.908-.006 1.8-.24 2.594-.681v-9.347H9.445zM27.269 77a9.02 9.02 0 0 1 4.356 1.056 7.44 7.44 0 0 1 3.023 2.958 8.62 8.62 0 0 1 1.068 4.305 9.023 9.023 0 0 1-1.026 4.39 7.356 7.356 0 0 1-3.024 2.972 9.02 9.02 0 0 1-4.397 1.083 8.924 8.924 0 0 1-4.383-1.083 7.398 7.398 0 0 1-2.996-2.973 9.023 9.023 0 0 1-1.027-4.389 8.55 8.55 0 0 1 1.082-4.333 7.55 7.55 0 0 1 3.024-2.93 8.938 8.938 0 0 1 4.3-1.056zm-4.161 8.333a6.117 6.117 0 0 0 1.123 3.861 3.632 3.632 0 0 0 3.01 1.39 3.799 3.799 0 0 0 3.107-1.39 6.089 6.089 0 0 0 1.138-3.958 5.672 5.672 0 0 0-1.138-3.792 3.854 3.854 0 0 0-3.093-1.388 3.674 3.674 0 0 0-2.996 1.388 5.77 5.77 0 0 0-1.165 3.875l.014.014zM41.334 77.32l3.676 9.347 3.593-9.348h4.3l-6.936 16.445h-1.942l-7.032-16.445zM61.877 77a6.71 6.71 0 0 1 5.354 2.278 9.328 9.328 0 0 1 1.97 6.305v.64H58.34a4.635 4.635 0 0 0 4.758 4.5h.319c.95-.001 1.89-.18 2.774-.529a12.022 12.022 0 0 0 2.774-1.597v3.167a10.657 10.657 0 0 1-6.533 2 8.026 8.026 0 0 1-5.937-2.292 8.256 8.256 0 0 1-2.302-6.11 8.576 8.576 0 0 1 2.122-6.015A7.153 7.153 0 0 1 61.877 77zm3.537 6.653a4.81 4.81 0 0 0-1.012-2.778 2.939 2.939 0 0 0-2.345-1 3.271 3.271 0 0 0-2.455.944 4.809 4.809 0 0 0-1.179 2.778l6.991.056zM81.144 77c.549.002 1.09.13 1.581.375a8.766 8.766 0 0 1 1.817 1.278l-1.387 3.708a5.2 5.2 0 0 0-2.774-1.389 2.939 2.939 0 0 0-1.845.736 5.222 5.222 0 0 0-1.387 1.945 5.784 5.784 0 0 0-.555 2.416v7.362h-4.161V77.319h4.036v4.167a11.223 11.223 0 0 1 2.22-3.375A3.521 3.521 0 0 1 81.144 77zM58.076 43.375a20.407 20.407 0 0 1-15.597 7.252 20.407 20.407 0 0 1-15.598-7.252l-8.462 4.833a29.918 29.918 0 0 0 41.918 6.07l.874-.68.25.152 6.7 3.847a37.818 37.818 0 0 0 4.896-5.555l-14.98-8.667zM22.012 30.111a20.487 20.487 0 0 1 12.317-18.858 20.44 20.44 0 0 1 22.168 3.88 20.504 20.504 0 0 1 5.2 21.923l8.461 4.888c5.358-12.617 1.535-27.265-9.303-35.646a30.07 30.07 0 0 0-36.795 0c-10.837 8.38-14.66 23.029-9.303 35.646l8.462-4.888a20.413 20.413 0 0 1-1.207-6.945z"/>
      </g>
    </svg>
  );
}

export default Logo
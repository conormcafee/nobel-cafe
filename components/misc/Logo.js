export const Logo = ({ hasSnowFall }) => {
  const fill = hasSnowFall ? "text-red-400" : "text-[#59266A]";

  return (
    <div className={`${fill}`}>
      <svg
        className="h-8 w-auto"
        fill="none"
        viewBox="0 0 612 107"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M379.291 29.247c-3.185-2.678-7.438-4.011-12.787-4.011-4.565 0-8.375.833-11.448 2.519-3.073 1.693-5.517 3.913-7.354 6.688-1.832 2.775-3.144 5.974-3.934 9.582-.799 3.622-1.193 7.361-1.193 11.227 0 3.566.416 7.035 1.262 10.407.84 3.365 2.158 6.369 3.941 8.991 1.783 2.623 4.107 4.732 6.986 6.314 2.866 1.582 6.287 2.38 10.248 2.38 6.244 0 11.129-1.638 14.64-4.905 3.519-3.275 5.676-7.882 6.467-13.821h12.933c-1.388 9.506-4.933 16.839-10.636 21.994-5.689 5.155-13.439 7.723-23.251 7.723-5.849 0-11.018-.937-15.534-2.817-4.503-1.88-8.271-4.564-11.288-8.027-3.025-3.462-5.309-7.604-6.842-12.405-1.533-4.809-2.304-10.088-2.304-15.833 0-5.745.75-11.115 2.228-16.118 1.492-5.002 3.74-9.366 6.758-13.085 3.032-3.719 6.813-6.633 11.379-8.77 4.559-2.13 9.853-3.191 15.896-3.191 4.364 0 8.45.521 12.273 1.561 3.803 1.041 7.175 2.644 10.096 4.829 2.928 2.178 5.328 4.926 7.209 8.243 1.887 3.323 3.073 7.265 3.565 11.823h-13.078c-.994-4.867-3.068-8.628-6.232-11.298ZM472.166 94.334c-3.268 0-5.869-.909-7.799-2.747-1.928-1.832-2.893-4.83-2.893-8.992-3.477 4.162-7.514 7.16-12.121 8.992-4.607 1.838-9.582 2.747-14.932 2.747-3.469 0-6.736-.36-9.811-1.11-3.073-.742-5.772-1.978-8.104-3.705-2.317-1.741-4.156-3.976-5.495-6.695-1.332-2.727-2.005-6.016-2.005-9.88 0-4.364.735-7.931 2.22-10.713 1.491-2.769 3.448-5.017 5.877-6.758 2.435-1.728 5.204-3.046 8.319-3.941 3.129-.888 6.327-1.63 9.588-2.22a112.657 112.657 0 0 1 9.887-1.561c3.123-.347 5.863-.847 8.243-1.492 2.38-.646 4.261-1.582 5.655-2.824 1.387-1.235 2.074-3.046 2.074-5.419 0-2.775-.521-5.009-1.555-6.695-1.041-1.679-2.379-2.969-4.017-3.864-1.638-.888-3.47-1.485-5.495-1.783a42.422 42.422 0 0 0-6.016-.438c-5.356 0-9.818 1.014-13.37 3.046-3.587 2.026-5.517 5.87-5.808 11.511h-12.635c.195-4.752 1.193-8.77 2.971-12.038 1.789-3.268 4.162-5.918 7.132-7.944 2.977-2.033 6.397-3.497 10.262-4.392 3.858-.888 7.917-1.332 12.19-1.332 3.455 0 6.904.25 10.324.742 3.42.493 6.516 1.52 9.291 3.046 2.775 1.541 4.995 3.691 6.682 6.467 1.686 2.775 2.531 6.39 2.531 10.852v39.534c0 2.97.167 5.155.521 6.528.34 1.395 1.505 2.089 3.482 2.089 1.096 0 2.387-.25 3.879-.749v9.817c-2.181 1.283-5.207 1.921-9.072 1.921ZM454.48 55.619a93.802 93.802 0 0 1-8.097 1.346c-2.823.34-5.675.736-8.541 1.187-2.88.451-5.446 1.166-7.735 2.158-2.276.992-4.129 2.408-5.572 4.232-1.436 1.825-2.158 4.329-2.158 7.5 0 2.082.424 3.844 1.271 5.287a10.489 10.489 0 0 0 3.261 3.49c1.346.888 2.928 1.533 4.76 1.929 1.838.396 3.698.597 5.571.597 4.163 0 7.736-.569 10.706-1.714 2.969-1.131 5.397-2.574 7.285-4.302 1.873-1.734 3.261-3.614 4.156-5.654.895-2.026 1.346-3.935 1.346-5.725V53.024c-1.596 1.186-3.671 2.054-6.253 2.595ZM513.331 27.332c1.687-1.193 4.065-1.783 7.14-1.783 1.09 0 2.283.069 3.566.222 1.291.146 2.477.423 3.566.819V15.585c-1.187-.395-2.554-.687-4.087-.888-1.54-.194-2.907-.298-4.087-.298-6.932 0-12.218 1.609-15.826 4.829-3.629 3.226-5.426 7.952-5.426 14.196v11.448h-12.926v11.143h12.926v38.209h12.635v-38.21h14.855V44.872h-14.855V34.166c0-3.365.84-5.648 2.519-6.834ZM591.359 87.798c-5.745 4.371-12.982 6.536-21.689 6.536-6.147 0-11.477-.985-15.986-2.97-4.51-1.978-8.305-4.753-11.364-8.326-3.081-3.566-5.37-7.819-6.911-12.773-1.539-4.954-2.406-10.352-2.602-16.2 0-5.842.889-11.199 2.679-16.049 1.776-4.856 4.28-9.061 7.5-12.634 3.22-3.573 7.042-6.334 11.441-8.326 4.413-1.978 9.235-2.97 14.487-2.97 6.841 0 12.516 1.415 17.026 4.232 4.503 2.831 8.118 6.418 10.837 10.775 2.734 4.364 4.621 9.117 5.655 14.265 1.048 5.162 1.464 10.061 1.263 14.716h-57.518c-.098 3.372.298 6.564 1.186 9.589.895 3.025 2.338 5.696 4.316 8.021 1.977 2.331 4.502 4.198 7.576 5.571 3.073 1.395 6.688 2.089 10.852 2.089 5.35 0 9.741-1.242 13.154-3.719 3.428-2.478 5.669-6.245 6.766-11.289h12.481c-1.692 8.619-5.404 15.105-11.149 19.462ZM588.32 38.46c-1.152-2.671-2.686-4.981-4.607-6.91-1.942-1.936-4.225-3.477-6.834-4.607-2.63-1.138-5.529-1.707-8.693-1.707-3.275 0-6.23.569-8.854 1.707-2.623 1.131-4.877 2.699-6.758 4.684-1.887 1.978-3.372 4.281-4.469 6.903-1.089 2.63-1.734 5.426-1.928 8.396h44.141a25.733 25.733 0 0 0-1.998-8.466Z"
          fill="currentColor"
          stroke="#4C4B4C"
          strokeWidth=".5"
        />
        <path
          d="M23.358 17.93v11.636h.285c5.01-8.888 12.96-13.336 23.833-13.336 4.822 0 8.84.667 12.06 1.984 3.211 1.325 5.813 3.171 7.805 5.537 1.984 2.366 3.372 5.176 4.184 8.444.798 3.261 1.207 6.875 1.207 10.844v48.235H60.665v-49.65c0-4.538-1.318-8.132-3.969-10.782-2.644-2.644-6.293-3.969-10.92-3.969-3.692 0-6.884.569-9.576 1.707-2.699 1.124-4.947 2.74-6.737 4.815-1.804 2.082-3.15 4.517-4.052 7.306-.895 2.789-1.339 5.842-1.339 9.151v41.422H12.007V17.93"
          fill="#fff"
        />
        <path
          d="M23.358 17.93v11.636h.285c5.01-8.888 12.96-13.336 23.833-13.336 4.822 0 8.84.667 12.06 1.984 3.211 1.325 5.813 3.171 7.805 5.537 1.984 2.366 3.372 5.176 4.184 8.444.798 3.261 1.207 6.875 1.207 10.844v48.235H60.665v-49.65c0-4.538-1.318-8.132-3.969-10.782-2.644-2.644-6.293-3.969-10.92-3.969-3.692 0-6.884.569-9.576 1.707-2.699 1.124-4.947 2.74-6.737 4.815-1.804 2.082-3.15 4.517-4.052 7.306-.895 2.789-1.339 5.842-1.339 9.151v41.422H12.007V17.93"
          stroke="#4C4B4C"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M89.181 39.564c1.513-4.677 3.79-8.742 6.813-12.198 3.025-3.448 6.758-6.168 11.206-8.16 4.447-1.977 9.554-2.977 15.326-2.977 5.856 0 10.99 1 15.389 2.977 4.399 1.991 8.104 4.711 11.136 8.16 3.025 3.456 5.294 7.521 6.806 12.198 1.513 4.683 2.269 9.72 2.269 15.111s-.756 10.407-2.269 15.042c-1.512 4.635-3.781 8.673-6.806 12.121-3.032 3.462-6.737 6.147-11.136 8.09-4.399 1.937-9.533 2.907-15.389 2.907-5.772 0-10.879-.971-15.326-2.907-4.448-1.942-8.18-4.628-11.206-8.09-3.025-3.448-5.3-7.486-6.813-12.121-1.512-4.635-2.269-9.651-2.269-15.042s.757-10.428 2.27-15.111Zm12.274 26.955c1.18 3.455 2.817 6.342 4.892 8.658 2.088 2.311 4.517 4.094 7.312 5.315 2.782 1.235 5.738 1.846 8.867 1.846 3.115 0 6.071-.61 8.86-1.846 2.789-1.222 5.225-3.005 7.306-5.315 2.082-2.316 3.712-5.203 4.898-8.658 1.18-3.448 1.77-7.396 1.77-11.844 0-4.448-.59-8.389-1.77-11.844-1.187-3.448-2.816-6.362-4.898-8.722-2.081-2.365-4.517-4.156-7.306-5.397-2.789-1.229-5.745-1.839-8.86-1.839-3.129 0-6.085.61-8.867 1.839-2.796 1.242-5.225 3.032-7.312 5.397-2.075 2.359-3.712 5.273-4.892 8.722-1.187 3.455-1.77 7.396-1.77 11.844 0 4.448.584 8.396 1.77 11.844ZM177.97 16.341V44.51h.208c1.478-3.025 3.795-5.225 6.966-6.591 3.164-1.374 6.646-2.061 10.442-2.061 4.225 0 7.896.77 11.032 2.324 3.122 1.547 5.724 3.636 7.806 6.279 2.074 2.629 3.643 5.675 4.697 9.124 1.055 3.441 1.582 7.105 1.582 10.969 0 3.879-.514 7.535-1.526 10.977-1.027 3.448-2.574 6.46-4.649 9.026-2.075 2.567-4.683 4.586-7.812 6.064-3.129 1.471-6.765 2.213-10.914 2.213-1.339 0-2.838-.146-4.489-.423a24.223 24.223 0 0 1-4.905-1.374 19.4 19.4 0 0 1-4.593-2.574c-1.443-1.096-2.65-2.449-3.635-4.065h-.208v7.278h-8.978V16.341h8.976Zm32.228 40.145c-.666-2.421-1.686-4.586-3.06-6.487-1.367-1.901-3.129-3.413-5.273-4.537-2.144-1.124-4.662-1.687-7.542-1.687-3.025 0-5.592.597-7.702 1.79-2.116 1.201-3.844 2.762-5.176 4.697-1.332 1.936-2.297 4.129-2.9 6.592a31.742 31.742 0 0 0-.895 7.493c0 2.678.319 5.266.95 7.757.631 2.498 1.631 4.697 3.004 6.599 1.374 1.895 3.15 3.428 5.329 4.579 2.186 1.173 4.815 1.741 7.917 1.741 3.094 0 5.682-.582 7.757-1.783a14.478 14.478 0 0 0 5.009-4.752c1.263-1.971 2.179-4.226 2.748-6.752.555-2.539.839-5.134.839-7.812a27.947 27.947 0 0 0-1.005-7.438ZM313.649 16.341h-8.972v75.336h8.972V16.341ZM284.077 86.591c-5.495 4.17-12.398 6.244-20.725 6.244-5.87 0-10.956-.943-15.257-2.838-4.309-1.887-7.93-4.537-10.858-7.943-2.935-3.407-5.134-7.48-6.605-12.212-1.464-4.732-2.297-9.894-2.484-15.473 0-5.578.854-10.691 2.554-15.326 1.707-4.635 4.094-8.666 7.167-12.073a32.689 32.689 0 0 1 10.935-7.944c4.205-1.887 8.826-2.837 13.835-2.837 6.536 0 11.948 1.353 16.264 4.045 4.302 2.692 7.757 6.133 10.358 10.289 2.602 4.163 4.399 8.708 5.392 13.627.992 4.919 1.395 9.609 1.207 14.05h-54.931c-.097 3.22.285 6.272 1.131 9.165.853 2.887 2.227 5.44 4.114 7.653 1.894 2.234 4.309 4.004 7.244 5.329 2.935 1.325 6.383 1.991 10.358 1.991 5.114 0 9.298-1.18 12.559-3.553 3.275-2.366 5.419-5.96 6.459-10.789h11.934c-1.617 8.236-5.169 14.432-10.651 18.595Zm-2.907-47.125c-1.096-2.553-2.56-4.752-4.399-6.598-1.852-1.845-4.031-3.316-6.536-4.399-2.505-1.089-5.28-1.637-8.305-1.637-3.123 0-5.932.548-8.444 1.637-2.505 1.083-4.663 2.581-6.453 4.469-1.804 1.887-3.219 4.093-4.26 6.598a24.95 24.95 0 0 0-1.846 8.021h42.15a24.75 24.75 0 0 0-1.907-8.091Z"
          fill="#fff"
          stroke="#4C4B4C"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M10.973 17.632h13.37M167.979 15.876h11.011"
          stroke="#4C4B4C"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

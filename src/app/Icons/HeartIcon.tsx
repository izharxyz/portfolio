export default function HeartIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="960"
            height="960"
            viewBox="0 0 960 960"
        >
            <path
                fill="currentColor"
                d="M896 448v128h-64v64h-64v-64h-64v64h-64v64h-64v64h-64v64h64v64h-64v64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64H64V448H0V128h64V64h64V0h192v64h64v64h64v64h64v-64h64V64h64V0h192v64h64v64h64v320h-64zM256 64h-64v64h-64v64H64v64h64v-64h64v-64h64V64zm512 0h-64v64h-64v64h-64v64h64v-64h64v-64h64V64zM640 768v64h-64v-64h64zm64-64v64h-64v-64h64zm64-64v64h-64v-64h64z"
            />
        </svg>
    );
}



interface InputBoxLargeProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    fieldType: "text" | "password" | "date" | "email";
}

export const InputBoxLarge: React.FC<InputBoxLargeProps> = ({placeholder, value, onChange, fieldType = "text"}) => {



    return(
        <div>
            <input
                placeholder={placeholder}
                type={fieldType}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className={" w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"}
            />
        </div>
    )
}
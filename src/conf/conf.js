const conf = {
    ENDPOINT: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DB_ID: String(import.meta.env.VITE_DATABASE_ID),
    COLLECTION_ID: String(import.meta.env.VITE_COLLECTION_ID),
    PROJECT_NAME: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME)
}

export default conf
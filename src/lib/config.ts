import z from 'zod';

const envSchema = z.object({
  OPENAI_API_KEY: z.string().trim().min(1),
  PINECONE_API_KEY: z.string().trim().min(1),
  PINECONE_ENVIRONMENT: z.string().trim().min(1),
  PINECONE_INDEX_NAME: z.string().trim().min(1),
  PDF_PATH: z.string().trim().min(1),
  INDEX_INIT_TIMEOUT: z.coerce.number().min(1), // Converte e valida come numero
});

// Aggiungi un controllo preliminare per evitare di fare il parsing con dati mancanti
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Error parsing environment variables:", parsedEnv.error.format());
  process.exit(1);  // Esci con errore se le variabili non sono corrette
}

export const env = parsedEnv.data;

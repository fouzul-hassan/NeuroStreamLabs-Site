// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI agent that generates a description of NeuroStream's progress based on a simple prompt.
 *
 * - generateProgressDescription - A function that generates the description of the progress.
 * - GenerateProgressDescriptionInput - The input type for the generateProgressDescription function.
 * - GenerateProgressDescriptionOutput - The return type for the generateProgressDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProgressDescriptionInputSchema = z.object({
  prompt: z.string().describe('A simple prompt describing NeuroStream\u2019s progress.'),
});
export type GenerateProgressDescriptionInput = z.infer<typeof GenerateProgressDescriptionInputSchema>;

const GenerateProgressDescriptionOutputSchema = z.object({
  description: z.string().describe('A tailored description of NeuroStream\u2019s progress based on the prompt.'),
});
export type GenerateProgressDescriptionOutput = z.infer<typeof GenerateProgressDescriptionOutputSchema>;

export async function generateProgressDescription(input: GenerateProgressDescriptionInput): Promise<GenerateProgressDescriptionOutput> {
  return generateProgressDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProgressDescriptionPrompt',
  input: {schema: GenerateProgressDescriptionInputSchema},
  output: {schema: GenerateProgressDescriptionOutputSchema},
  prompt: `You are tasked with generating a description of NeuroStream's progress based on a simple prompt provided by the user.

Prompt: {{{prompt}}}

Description: `,
});

const generateProgressDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProgressDescriptionFlow',
    inputSchema: GenerateProgressDescriptionInputSchema,
    outputSchema: GenerateProgressDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

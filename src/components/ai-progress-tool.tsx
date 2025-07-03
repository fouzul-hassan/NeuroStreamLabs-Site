"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateProgressDescription, GenerateProgressDescriptionInput } from '@/ai/flows/generate-progress-description';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  prompt: z.string().min(10, {
    message: 'Prompt must be at least 10 characters.',
  }).max(200, {
    message: 'Prompt must be less than 200 characters.'
  }),
});

export function AiProgressTool() {
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setDescription('');
    setError('');
    try {
      const input: GenerateProgressDescriptionInput = { prompt: values.prompt };
      const result = await generateProgressDescription(input);
      setDescription(result.description);
    } catch (err) {
      console.error(err);
      setError('Failed to generate description. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          AI-Powered Progress Reporter
        </CardTitle>
        <CardDescription>
          Provide a simple prompt about a recent achievement, and our AI will generate a professional progress description.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Prompt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'achieved 95% accuracy in real-time EEG to text decoding'"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Description'
              )}
            </Button>
            
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            
            {description && (
              <div className="w-full p-4 rounded-md bg-muted/50 border">
                 <h4 className="font-semibold mb-2">Generated Description:</h4>
                 <p className="text-sm text-foreground/80">{description}</p>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

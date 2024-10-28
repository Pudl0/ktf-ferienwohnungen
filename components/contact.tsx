"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-amber-800">
              Kontaktieren Sie uns
            </CardTitle>
            <CardDescription className="text-lg text-amber-700">
              Wir helfen Ihnen gerne bei der Planung Ihres perfekten Urlaubs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-amber-900">
                  <Phone className="h-5 w-5" />
                  <span>+49 (0) 123 456789</span>
                </div>
                <div className="flex items-center space-x-3 text-amber-900">
                  <Mail className="h-5 w-5" />
                  <span>info@hof-unter-den-eichen.de</span>
                </div>
                <div className="flex items-center space-x-3 text-amber-900">
                  <MapPin className="h-5 w-5" />
                  <span>Naturstraße 123, 12345 Landkreis</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Ihr Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Textarea
                  placeholder="Ihre Nachricht"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  <Send className="mr-2 h-4 w-4" /> Nachricht senden
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

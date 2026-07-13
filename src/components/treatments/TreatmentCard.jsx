import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TreatmentCard({ treatment }) {
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-premium border border-rose-brand/5 hover:border-rose-brand/10 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
    >
      {/* Decorative gold crafting line that rolls out on hover */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-peach-brand group-hover:w-full transition-all duration-500 ease-out" />

      <div className="space-y-3">
        {/* Decorative subtle rose indicator */}
        <div className="w-10 h-10 rounded-2xl bg-blush-brand flex items-center justify-center text-rose-brand font-bold text-sm">
          {treatment.name.substring(0, 2).toUpperCase()}
        </div>

        <h3 className="font-heading font-semibold text-lg text-plum-brand group-hover:text-rose-brand transition-colors">
          {treatment.name}
        </h3>

        <p className="text-xs text-mutedText leading-relaxed">
          {treatment.shortDescription}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 pt-6 mt-6 border-t border-gray-100">
        <Link
          to={`/treatments/${treatment.slug}`}
          className="text-xs font-semibold text-darkText hover:text-rose-brand flex items-center justify-center space-x-0.5 border border-gray-100 rounded-full py-2 hover:bg-bgLight transition-colors"
        >
          <span>Learn More</span>
          <ChevronRight size={14} />
        </Link>
        <Link
          to="/appointment"
          className="text-xs font-semibold bg-rose-brand hover:bg-plum-brand text-white flex items-center justify-center space-x-1 rounded-full py-2 shadow-sm transition-colors"
        >
          <Calendar size={12} />
          <span>Book</span>
        </Link>
      </div>
    </motion.div>
  );
}

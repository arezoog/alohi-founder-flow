import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface Task {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  due_date: string | null;
  priority: 'low' | 'medium' | 'high' | null;
  created_at: string;
}

type DbTask = {
  id: string;
  title: string;
  description: string | null;
  completed: boolean;
  due_date: string | null;
  priority: string | null;
  created_at: string;
};

const mapDbTask = (task: DbTask): Task => ({
  ...task,
  priority: task.priority as 'low' | 'medium' | 'high' | null
});

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setTasks([]);
      setLoading(false);
      return;
    }

    async function fetchTasks() {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        toast.error('Failed to load tasks');
      } else {
        setTasks((data || []).map(mapDbTask));
      }
      setLoading(false);
    }

    fetchTasks();
  }, [user]);

  const addTask = async (title: string, priority?: 'low' | 'medium' | 'high', dueDate?: string) => {
    if (!user) return;

    const { data, error } = await supabase
      .from('tasks')
      .insert({
        user_id: user.id,
        title,
        priority: priority || null,
        due_date: dueDate || null
      })
      .select()
      .single();

    if (error) {
      toast.error('Failed to add task');
    } else if (data) {
      setTasks(prev => [mapDbTask(data), ...prev]);
      toast.success('Task added');
    }
  };

  const toggleTask = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const { error } = await supabase
      .from('tasks')
      .update({ completed: !task.completed })
      .eq('id', id);

    if (error) {
      toast.error('Failed to update task');
    } else {
      setTasks(prev =>
        prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
      );
    }
  };

  const deleteTask = async (id: string) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Failed to delete task');
    } else {
      setTasks(prev => prev.filter(t => t.id !== id));
      toast.success('Task deleted');
    }
  };

  return { tasks, loading, addTask, toggleTask, deleteTask };
}

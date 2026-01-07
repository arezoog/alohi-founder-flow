import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { BackgroundWaves } from '@/components/dashboard/BackgroundWaves';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Save, ExternalLink, Check } from 'lucide-react';
import { toast } from 'sonner';

interface UserIntegrations {
  oura_access_token: string | null;
  google_calendar_api_key: string | null;
  google_calendar_id: string | null;
}

export default function Settings() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [integrations, setIntegrations] = useState<UserIntegrations>({
    oura_access_token: null,
    google_calendar_api_key: null,
    google_calendar_id: null
  });
  
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    async function fetchIntegrations() {
      const { data, error } = await supabase
        .from('user_integrations')
        .select('oura_access_token, google_calendar_api_key, google_calendar_id')
        .eq('user_id', user.id)
        .single();

      if (data) {
        setIntegrations({
          oura_access_token: data.oura_access_token,
          google_calendar_api_key: data.google_calendar_api_key,
          google_calendar_id: data.google_calendar_id
        });
      }
      setLoading(false);
    }

    fetchIntegrations();
  }, [user, navigate]);

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    const { error } = await supabase
      .from('user_integrations')
      .update({
        oura_access_token: integrations.oura_access_token,
        google_calendar_api_key: integrations.google_calendar_api_key,
        google_calendar_id: integrations.google_calendar_id
      })
      .eq('user_id', user.id);

    if (error) {
      toast.error('Failed to save settings');
    } else {
      toast.success('Settings saved successfully');
    }
    setSaving(false);
  };

  const maskToken = (token: string | null) => {
    if (!token) return '';
    if (token.length <= 8) return '••••••••';
    return token.slice(0, 4) + '••••••••' + token.slice(-4);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundWaves />
      
      <Sidebar 
        mobileOpen={mobileMenuOpen} 
        onMobileClose={() => setMobileMenuOpen(false)} 
      />
      
      <div className="lg:pl-60 transition-all duration-300 relative z-10">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        
        <main className="p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your integrations and API keys</p>
          </div>

          <div className="space-y-6">
            {/* Oura Integration */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    Oura Ring
                    {integrations.oura_access_token && (
                      <span className="flex items-center gap-1 text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full">
                        <Check className="h-3 w-3" /> Connected
                      </span>
                    )}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sync your sleep, readiness, and activity data
                  </p>
                </div>
                <a
                  href="https://cloud.ouraring.com/personal-access-tokens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ocean hover:underline flex items-center gap-1"
                >
                  Get token <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="oura_token">Personal Access Token</Label>
                <Input
                  id="oura_token"
                  type="password"
                  placeholder={integrations.oura_access_token ? maskToken(integrations.oura_access_token) : "Paste your Oura access token"}
                  onChange={(e) => setIntegrations(prev => ({ ...prev, oura_access_token: e.target.value || prev.oura_access_token }))}
                  className="h-11 font-mono text-sm"
                />
              </div>
            </div>

            {/* Google Calendar Integration */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
                    Google Calendar
                    {integrations.google_calendar_api_key && (
                      <span className="flex items-center gap-1 text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full">
                        <Check className="h-3 w-3" /> Connected
                      </span>
                    )}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sync your calendar events
                  </p>
                </div>
                <a
                  href="https://console.cloud.google.com/apis/credentials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ocean hover:underline flex items-center gap-1"
                >
                  Get API key <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="google_api_key">API Key</Label>
                  <Input
                    id="google_api_key"
                    type="password"
                    placeholder={integrations.google_calendar_api_key ? maskToken(integrations.google_calendar_api_key) : "Paste your Google API key"}
                    onChange={(e) => setIntegrations(prev => ({ ...prev, google_calendar_api_key: e.target.value || prev.google_calendar_api_key }))}
                    className="h-11 font-mono text-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="calendar_id">Calendar ID</Label>
                  <Input
                    id="calendar_id"
                    type="text"
                    placeholder={integrations.google_calendar_id || "primary (or your calendar ID)"}
                    onChange={(e) => setIntegrations(prev => ({ ...prev, google_calendar_id: e.target.value || prev.google_calendar_id }))}
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use "primary" for your main calendar, or find your calendar ID in Google Calendar settings
                  </p>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <Button onClick={handleSave} disabled={saving} className="w-full h-11">
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save Settings
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

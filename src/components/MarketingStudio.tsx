import React, { useState } from "react";
import { CheckCircle, Calendar, Play, Pause, TrendingUp, Eye, MousePointer, DollarSign, Target, Sparkles, Image as ImageIcon, Video, FileText, Download, CreditCard as Edit3, Copy, Trash2, Settings, BarChart3, AlertTriangle, ThumbsUp, Clock, Users, Globe, Activity, Zap, Bot, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { PromotionCalendar } from "./PromotionCalendar";

interface Creative {
  id: string;
  type: "image" | "video" | "text";
  name: string;
  thumbnail?: string;
  status: "approved" | "pending" | "rejected";
  performance?: {
    impressions: number;
    clicks: number;
    ctr: number;
  };
}

interface Campaign {
  id: string;
  name: string;
  status: "approved" | "running" | "paused" | "completed";
  objective: string;
  budget: number;
  startDate: string;
  endDate: string;
  platforms: string[];
  audience: string;
  creatives: Creative[];
}

export const MarketingStudio: React.FC = () => {
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();
  const [activeSection, setActiveSection] = useState<"details" | "optimization" | "execution" | "performance">("details");
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [campaignStatus, setCampaignStatus] = useState<"paused" | "running">("paused");

  const sections = [
    { id: "details", label: "Campaign Details", icon: FileText },
    { id: "optimization", label: "Optimization", icon: Target },
    { id: "execution", label: "Run Campaign", icon: Play },
    { id: "performance", label: "Performance Monitor", icon: BarChart3 },
  ];

  const approvedCampaigns: Campaign[] = [
    {
      id: "camp-001",
      name: "Summer Sale 2025",
      status: "approved",
      objective: "Drive conversions and increase sales",
      budget: 50000,
      startDate: "2025-10-15",
      endDate: "2025-11-15",
      platforms: ["Facebook", "Instagram", "Google Ads", "LinkedIn"],
      audience: "Age 25-45, Urban, Tech-savvy professionals",
      creatives: [
        {
          id: "cr-001",
          type: "image",
          name: "Hero Banner - Desktop",
          status: "approved",
          thumbnail: "https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          id: "cr-002",
          type: "video",
          name: "Product Showcase 30s",
          status: "approved",
        },
        {
          id: "cr-003",
          type: "image",
          name: "Mobile Banner",
          status: "approved",
          thumbnail: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          id: "cr-004",
          type: "text",
          name: "Ad Copy - Primary",
          status: "approved",
        },
      ],
    },
    {
      id: "camp-002",
      name: "Brand Awareness Q4",
      status: "running",
      objective: "Increase brand visibility and engagement",
      budget: 35000,
      startDate: "2025-10-01",
      endDate: "2025-12-31",
      platforms: ["YouTube", "TikTok", "Instagram"],
      audience: "Age 18-35, Social media active users",
      creatives: [
        {
          id: "cr-005",
          type: "video",
          name: "Brand Story Video",
          status: "approved",
        },
        {
          id: "cr-006",
          type: "image",
          name: "Social Media Card",
          status: "approved",
          thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
    },
  ];

  const performanceMetrics = [
    {
      title: "Impressions",
      value: "2.4M",
      change: "+18.2%",
      icon: Eye,
      color: "blue",
    },
    {
      title: "Clicks",
      value: "67.8K",
      change: "+12.5%",
      icon: MousePointer,
      color: "green",
    },
    {
      title: "CTR",
      value: "2.82%",
      change: "+0.4%",
      icon: TrendingUp,
      color: "green",
    },
    {
      title: "Spend",
      value: "$12,450",
      change: "+8.7%",
      icon: DollarSign,
      color: "orange",
    },
  ];

  const aiSuggestions = [
    {
      id: "1",
      type: "optimization",
      title: "Increase Facebook Budget",
      description: "Facebook ads showing 15% higher CTR. Consider reallocating 20% budget from LinkedIn.",
      impact: "high",
      action: "Optimize Budget",
    },
    {
      id: "2",
      type: "creative",
      title: "Refresh Creative Assets",
      description: "Creative fatigue detected. Video creative performance dropped 12% in last 3 days.",
      impact: "medium",
      action: "Generate New Creative",
    },
    {
      id: "3",
      type: "timing",
      title: "Optimal Schedule Window",
      description: "Peak engagement detected 6-9 PM. Increase bid adjustments during these hours.",
      impact: "high",
      action: "Adjust Schedule",
    },
  ];

  const platformPerformance = [
    {
      platform: "Facebook",
      impressions: "1.2M",
      clicks: "32.4K",
      ctr: "2.7%",
      spend: "$4,200",
      roas: "4.2x",
      status: "excellent",
    },
    {
      platform: "Instagram",
      impressions: "850K",
      clicks: "21.5K",
      ctr: "2.5%",
      spend: "$3,800",
      roas: "3.8x",
      status: "good",
    },
    {
      platform: "Google Ads",
      impressions: "280K",
      clicks: "11.2K",
      ctr: "4.0%",
      spend: "$3,200",
      roas: "5.1x",
      status: "excellent",
    },
    {
      platform: "LinkedIn",
      impressions: "70K",
      clicks: "2.7K",
      ctr: "3.9%",
      spend: "$1,250",
      roas: "2.8x",
      status: "good",
    },
  ];

  React.useEffect(() => {
    if (approvedCampaigns.length > 0) {
      setSelectedCampaign(approvedCampaigns[0]);
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "running":
        return "bg-blue-100 text-blue-700";
      case "paused":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "border-red-500 bg-red-50";
      case "medium":
        return "border-yellow-500 bg-yellow-50";
      case "low":
        return "border-blue-500 bg-blue-50";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  const renderCampaignDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
            <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
              Approved Campaigns
            </h3>
            <div className="space-y-3">
              {approvedCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  onClick={() => setSelectedCampaign(campaign)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedCampaign?.id === campaign.id
                      ? `${themeClasses.gradient} border ${themeClasses.border}`
                      : `${themeClasses.hover} border ${themeClasses.border}`
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className={`font-semibold ${selectedCampaign?.id === campaign.id ? themeClasses.text : themeClasses.text}`}>
                      {campaign.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>
                    Budget: ${campaign.budget.toLocaleString()}
                  </p>
                  <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>
                    {campaign.platforms.length} platforms • {campaign.creatives.length} creatives
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedCampaign && (
          <div className="lg:col-span-2 space-y-6">
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`text-2xl font-bold ${themeClasses.text}`}>
                    {selectedCampaign.name}
                  </h3>
                  <p className={`${themeClasses.textSecondary} mt-1`}>
                    {selectedCampaign.objective}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-xl text-sm font-semibold ${getStatusColor(selectedCampaign.status)}`}>
                  {selectedCampaign.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-xl ${themeClasses.hover}`}>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>Budget</p>
                  <p className={`text-xl font-bold ${themeClasses.text}`}>
                    ${selectedCampaign.budget.toLocaleString()}
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${themeClasses.hover}`}>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>Duration</p>
                  <p className={`text-xl font-bold ${themeClasses.text}`}>
                    {Math.ceil((new Date(selectedCampaign.endDate).getTime() - new Date(selectedCampaign.startDate).getTime()) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${themeClasses.hover}`}>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>Platforms</p>
                  <p className={`text-xl font-bold ${themeClasses.text}`}>
                    {selectedCampaign.platforms.length}
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${themeClasses.hover}`}>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>Creatives</p>
                  <p className={`text-xl font-bold ${themeClasses.text}`}>
                    {selectedCampaign.creatives.length}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className={`text-sm font-semibold ${themeClasses.text} mb-2`}>Target Audience</h4>
                <p className={`${themeClasses.textSecondary}`}>{selectedCampaign.audience}</p>
              </div>

              <div>
                <h4 className={`text-sm font-semibold ${themeClasses.text} mb-2`}>Selected Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCampaign.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
                Approved Creatives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedCampaign.creatives.map((creative) => (
                  <div
                    key={creative.id}
                    className={`${themeClasses.border} border rounded-xl overflow-hidden ${themeClasses.hover} transition-all`}
                  >
                    {creative.thumbnail ? (
                      <img
                        src={creative.thumbnail}
                        alt={creative.name}
                        className="w-full h-40 object-cover"
                      />
                    ) : (
                      <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        {creative.type === "video" ? (
                          <Video className="text-blue-500" size={48} />
                        ) : creative.type === "text" ? (
                          <FileText className="text-purple-500" size={48} />
                        ) : (
                          <ImageIcon className="text-green-500" size={48} />
                        )}
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-semibold ${themeClasses.text} text-sm`}>
                          {creative.name}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(creative.status)}`}>
                          {creative.status}
                        </span>
                      </div>
                      <p className={`text-xs ${themeClasses.textSecondary} capitalize`}>
                        {creative.type}
                      </p>
                      <div className="flex items-center space-x-2 mt-3">
                        <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                          <Eye size={14} />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                          <Download size={14} />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                          <Edit3 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderOptimization = () => (
    <div className="space-y-6">
      <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
        <div className="flex items-center space-x-3 mb-6">
          <Target className="text-purple-600" size={24} />
          <div>
            <h3 className={`text-xl font-semibold ${themeClasses.text}`}>
              Campaign Optimization
            </h3>
            <p className={`text-sm ${themeClasses.textSecondary}`}>
              Platform selection and scheduling optimization
            </p>
          </div>
        </div>

        {selectedCampaign && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl p-5`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-4`}>Platform Selection</h4>
              <div className="space-y-3">
                {selectedCampaign.platforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
                  >
                    <div className="flex items-center space-x-3">
                      <Globe className="text-blue-600" size={20} />
                      <span className={`font-medium ${themeClasses.text}`}>{platform}</span>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl p-5`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-4`}>AI Optimization Insights</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50">
                  <ThumbsUp className="text-green-600 mt-0.5" size={18} />
                  <div>
                    <p className={`text-sm font-medium ${themeClasses.text}`}>
                      Optimal Platform Mix
                    </p>
                    <p className={`text-xs ${themeClasses.textSecondary}`}>
                      Current selection provides 92% audience coverage
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50">
                  <Clock className="text-blue-600 mt-0.5" size={18} />
                  <div>
                    <p className={`text-sm font-medium ${themeClasses.text}`}>
                      Best Launch Window
                    </p>
                    <p className={`text-xs ${themeClasses.textSecondary}`}>
                      Recommended: Oct 15-18 for maximum engagement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50">
                  <Zap className="text-purple-600 mt-0.5" size={18} />
                  <div>
                    <p className={`text-sm font-medium ${themeClasses.text}`}>
                      Budget Allocation
                    </p>
                    <p className={`text-xs ${themeClasses.textSecondary}`}>
                      Optimal split: 40% FB, 30% IG, 20% Google, 10% LinkedIn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
          Campaign Scheduling
        </h3>
        <PromotionCalendar />
      </div>
    </div>
  );

  const renderExecution = () => (
    <div className="space-y-6">
      <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Play className="text-green-600" size={24} />
            <div>
              <h3 className={`text-xl font-semibold ${themeClasses.text}`}>
                Campaign Execution
              </h3>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                Launch and manage your campaigns
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {campaignStatus === "running" ? (
              <button
                onClick={() => setCampaignStatus("paused")}
                className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                <Pause size={18} />
                <span>Pause Campaign</span>
              </button>
            ) : (
              <button
                onClick={() => setCampaignStatus("running")}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Play size={18} />
                <span>Launch Campaign</span>
              </button>
            )}
          </div>
        </div>

        {campaignStatus === "running" && (
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className={`font-semibold ${themeClasses.text}`}>Campaign is Live</p>
                <p className={`text-sm ${themeClasses.textSecondary}`}>
                  Running across {selectedCampaign?.platforms.length} platforms
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl p-5`}>
            <h4 className={`font-semibold ${themeClasses.text} mb-4 flex items-center`}>
              <Activity className="mr-2 text-blue-600" size={20} />
              Campaign Status
            </h4>
            <div className="space-y-3">
              {selectedCampaign?.platforms.map((platform, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <span className={`font-medium ${themeClasses.text}`}>{platform}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaignStatus === "running"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {campaignStatus === "running" ? "Live" : "Paused"}
                    </span>
                    <ExternalLink className="text-gray-400 cursor-pointer hover:text-blue-600" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl p-5`}>
            <h4 className={`font-semibold ${themeClasses.text} mb-4 flex items-center`}>
              <Settings className="mr-2 text-purple-600" size={20} />
              Quick Actions
            </h4>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                <span className="font-medium">Adjust Budget</span>
                <ChevronRight size={18} />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors">
                <span className="font-medium">Update Creative</span>
                <ChevronRight size={18} />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
                <span className="font-medium">Modify Targeting</span>
                <ChevronRight size={18} />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors">
                <span className="font-medium">View Reports</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {campaignStatus === "running" && (
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
          <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4`}>
            Live Campaign Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl p-4`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`text-${metric.color}-600`} size={20} />
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      metric.change.startsWith("+")
                        ? "text-green-700 bg-green-100"
                        : "text-red-700 bg-red-100"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className={`text-2xl font-bold ${themeClasses.text}`}>{metric.value}</p>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>{metric.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, idx) => {
          const Icon = metric.icon;
          const isPositive = metric.change.startsWith("+");
          return (
            <div
              key={idx}
              className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6 hover:shadow-lg transition-all`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 bg-${metric.color}-100 rounded-xl`}>
                  <Icon className={`text-${metric.color}-600`} size={24} />
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    isPositive ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-1`}>{metric.value}</h3>
              <p className={`${themeClasses.textSecondary} text-sm`}>{metric.title}</p>
            </div>
          );
        })}
      </div>

      <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
        <h3 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>
          Platform Performance
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${themeClasses.border}`}>
                <th className={`text-left py-3 px-4 font-semibold ${themeClasses.text}`}>
                  Platform
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>
                  Impressions
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>
                  Clicks
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>
                  CTR
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>
                  Spend
                </th>
                <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>
                  ROAS
                </th>
                <th className={`text-center py-3 px-4 font-semibold ${themeClasses.text}`}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {platformPerformance.map((platform, idx) => (
                <tr
                  key={idx}
                  className={`border-b ${themeClasses.border} ${themeClasses.hover} transition-colors`}
                >
                  <td className="py-4 px-4">
                    <span className={`font-medium ${themeClasses.text}`}>{platform.platform}</span>
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>
                    {platform.impressions}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>
                    {platform.clicks}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>
                    {platform.ctr}
                  </td>
                  <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>
                    {platform.spend}
                  </td>
                  <td className={`py-4 px-4 text-right font-bold text-green-600`}>
                    {platform.roas}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        platform.status === "excellent"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {platform.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
        <div className="flex items-center space-x-3 mb-6">
          <Bot className="text-purple-600" size={24} />
          <h3 className={`text-xl font-semibold ${themeClasses.text}`}>
            AI Performance Agent Suggestions
          </h3>
        </div>
        <div className="space-y-4">
          {aiSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={`border-l-4 rounded-lg p-5 ${getImpactColor(suggestion.impact)}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="text-purple-500" size={18} />
                    <h4 className={`font-semibold ${themeClasses.text}`}>{suggestion.title}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        suggestion.impact === "high"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {suggestion.impact} impact
                    </span>
                  </div>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-3`}>
                    {suggestion.description}
                  </p>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                    <Zap size={16} />
                    <span>{suggestion.action}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen max-h-screen overflow-auto ${themeClasses.bg}`}>
      <div className="space-y-6 md:space-y-8 p-6 md:p-8">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <Target className={`${themeClasses.text}`} size={32} />
            <h2
              className={`text-3xl font-bold ${themeClasses.text} bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent`}
            >
              Marketing Studio
            </h2>
          </div>
          <p className={`${themeClasses.textSecondary}`}>
            Execute, monitor, and optimize your approved campaigns
          </p>
        </div>

        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-xl p-2`}>
          <div className="flex space-x-2 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id as any)}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? `${themeClasses.accent} text-white shadow-lg`
                      : `${themeClasses.text} ${themeClasses.hover}`
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {activeSection === "details" && renderCampaignDetails()}
        {activeSection === "optimization" && renderOptimization()}
        {activeSection === "execution" && renderExecution()}
        {activeSection === "performance" && renderPerformance()}
      </div>
    </div>
  );
};

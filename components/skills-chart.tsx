"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const skillsData = {
  languages: [
    { name: "Java", proficiency: 95 },
    { name: "Python", proficiency: 75 },
    { name: "TypeScript", proficiency: 45 },
    { name: "JavaScript", proficiency: 35 },
    { name: "SQL", proficiency: 85 },
    { name: "C/C++", proficiency: 70 },
    { name: "Scala", proficiency: 90 },
  ],

  frontend: [
    { name: "Angular", proficiency: 65 },
    { name: "React", proficiency: 55 },
    { name: "Next.js", proficiency: 55 },
  ],

  backend: [
    { name: "Spring Boot", proficiency: 95 },
    { name: "FastAPI", proficiency: 75 },
    { name: "GraphQL", proficiency: 78 },
    { name: "Microservices", proficiency: 90 },
    { name: "WebSockets", proficiency: 80 },
  ],

  aiml: [
    { name: "PyTorch", proficiency: 55 },
    { name: "LangGraph", proficiency: 90 },
    { name: "Optuna", proficiency: 65 },
    { name: "Albumentations", proficiency: 65 },
    { name: "SHAP", proficiency: 59 },
    { name: "LIME", proficiency: 59 },
    { name: "Grad-CAM", proficiency: 59 },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D", "#FFCC00", "#FF6666"]

const skillDistribution = [
  { name: "Programming Languages", value: skillsData.languages.length },
  { name: "Frontend", value: skillsData.frontend.length },
  { name: "Backend", value: skillsData.backend.length },
  { name: "AI/ML", value: skillsData.aiml.length },
]


const radarData = [
  {
    subject: "Programming",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "Frontend",
    A: 50,
    fullMark: 100,
  },
  {
    subject: "Backend",
    A: 95,
    fullMark: 100,
  },
  {
    subject: "AI/ML",
    A: 65,
    fullMark: 100,
  },
  {
    subject: "Databases",
    A: 90,
    fullMark: 100,
  },
  {
    subject: "DevOps",
    A: 80,
    fullMark: 100,
  },
]

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded shadow-sm">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-primary">{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded shadow-sm">
        <p className="font-medium">{`${payload[0].name}`}</p>
        <p className="text-primary">{`Skills: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const renderCustomizedLabel = ({ name, percent }: any) => {
  return `${name}: ${(percent * 100).toFixed(0)}%`
}

export default function SkillsChart() {
  const [activeCategory, setActiveCategory] = useState("languages")

  const activeData = skillsData[activeCategory as keyof typeof skillsData]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Technical Skills</CardTitle>
        <CardDescription>A visualization of my technical skills and proficiency levels</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="bar" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            <TabsTrigger value="pie">Distribution</TabsTrigger>
            <TabsTrigger value="radar">Expertise Areas</TabsTrigger>
          </TabsList>

          <TabsContent value="bar" className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <button
                onClick={() => setActiveCategory("languages")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === "languages"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Programming Languages
              </button>
              <button
                onClick={() => setActiveCategory("frontend")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === "frontend"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveCategory("backend")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === "backend"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveCategory("aiml")}
                className={`px-3 py-1 rounded-full text-sm ${
                  activeCategory === "aiml"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                AI/ML
              </button>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activeData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <RechartsTooltip content={<CustomBarTooltip />} />
                  <Bar dataKey="proficiency" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="pie">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip content={<CustomPieTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="radar">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Skills" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <RechartsTooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

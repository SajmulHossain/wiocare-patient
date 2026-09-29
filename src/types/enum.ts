export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export enum BloodGroup {
  A_POSITIVE = "A+",
  A_NEGATIVE = "A-",
  B_POSITIVE = "B+",
  B_NEGATIVE = "B-",
  AB_POSITIVE = "AB+",
  AB_NEGATIVE = "AB-",
  O_POSITIVE = "O+",
  O_NEGATIVE = "O-",
}

export enum Roles {
  PATIENT = "PATIENT",
  DOCTOR = "DOCTOR",
  DRIVER = "DRIVER",
  DIAGNOSIS = "DIAGNOSIS",
  RIDER = "RIDER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export enum AuditActorType {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
  SYSTEM = "SYSTEM",
}

export enum AuthProviderEnum {
  GOOGLE = "GOOGLE",
  CREDENTIALS = "CREDENTIALS",
}

export enum PatientAccessStatus {
  PENDING = "PENDING",
  GRANTED = "GRANTED",
  DENIED = "DENIED",
  REVOKED = "REVOKED",
  EXPIRED = "EXPIRED",
}

export enum PatientAccessVia {
  QR_CODE = "QR_CODE",
  IN_PERSON = "IN_PERSON",
  PATIENT_REQUEST = "PATIENT_REQUEST",
  DOCTOR_REQUEST = "DOCTOR_REQUEST",
  ADMIN = "ADMIN",
  ACCESS_CODE = "ACCESS_CODE",
}

export enum NotificationType {
  ALARM = "ALARM",
  REMINDER = "REMINDER",
  GENERAL = "GENERAL",
  APPOINTMENT = "APPOINTMENT",
  PAYMENT = "PAYMENT",
  SYSTEM = "SYSTEM",
}

export enum DevicePlatform {
  WEB = "WEB",
  ANDROID = "ANDROID",
  IOS = "IOS",
}

export enum PrescriptionStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  FILLED = "FILLED",
}

export enum SnapshotStatus {
  PROCESSING = "PROCESSING",
  READY = "READY",
  UNAVAILABLE = "UNAVAILABLE",
}

export enum Wio_Status {
  COMPLETED = "COMPLETED",
  QUARANTINED = "QUARANTINED",
  IN_PROGRESS = "IN_PROGRESS",
  NEEDS_VERIFICATION = "NEEDS_VERIFICATION",
}

export enum CheckupSession {
  MORNING = "MORNING",
  AFTERNOON = "AFTERNOON",
  EVENING = "EVENING",
  NIGHT = "NIGHT",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
  DAILY = "DAILY",
}

export enum VitalType {
  BLOOD_PRESSURE = "BLOOD_PRESSURE",
  BLOOD_SUGAR = "BLOOD_SUGAR",
  HEART_RATE = "HEART_RATE",
  BODY_TEMPERATURE = "BODY_TEMPERATURE",
  PULSE_RATE = "PULSE_RATE",
  OXYGEN_SATURATION = "OXYGEN_SATURATION",
  WEIGHT = "WEIGHT",
  HEIGHT = "HEIGHT",
}

export enum MessageStatus {
  PENDING = "PENDING",
  STREAMING = "STREAMING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum SenderRole {
  USER = "USER",
  ASSISTANT = "ASSISTANT",
  SYSTEM = "SYSTEM",
}

export enum AttachmentType {
  IMAGE = "IMAGE",
  DOCUMENT = "DOCUMENT",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
}

export enum DoctorAvailabilityStatus {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  APPOINTMENT_ONLY = "APPOINTMENT_ONLY",
}

export enum AppointmentStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  NO_SHOW = "NO_SHOW",
  RESCHEDULED = "RESCHEDULED",
}

export enum SlotStatus {
  AVAILABLE = "AVAILABLE",
  PENDING = "PENDING",
  BOOKED = "BOOKED",
  BLOCKED = "BLOCKED",
}

export enum DoctorService {
  INSTANT_VIDEO_CONSULTATION = "INSTANT_VIDEO_CONSULTATION",
  ONLINE_APPOINTMENT = "ONLINE_APPOINTMENT",
  IN_CLINIC_CONSULTATION = "IN_CLINIC_CONSULTATION",
}

export enum MedicationSlot {
  MORNING = "MORNING",
  NOON = "NOON",
  NIGHT = "NIGHT",
}

export enum MedicationStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
}

export enum MedicationDoseStatus {
  TAKEN = "TAKEN",
  SKIPPED = "SKIPPED",
}

export enum PaymentProvider {
  BKASH = "BKASH",
  SSLCOMMERZ = "SSLCOMMERZ",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
}

export enum DayOfWeek {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

export enum ClinicalReviewStatus {
  PROCESSING = "PROCESSING",
  READY = "READY",
  FAILED = "FAILED",
}

export enum WioDiscussionStatus {
  PROCESSING = "PROCESSING",
  ACTIVE = "ACTIVE",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
  FAILED = "FAILED",
}

export enum VerificationStatus {
  PENDING = "PENDING",
  UNDER_REVIEW = "UNDER_REVIEW",
  VERIFIED = "VERIFIED",
  REJECTED = "REJECTED",
  SUSPENDED = "SUSPENDED",
}

export enum RegistrationZone {
  DHAKA_METRO = "Dhaka Metro",
  CHITTAGONG_METRO = "Chittagong Metro",
  RAJSHAHI_METRO = "Rajshahi Metro",
  KHULNA_METRO = "Khulna Metro",
  BARISHAL_METRO = "Barishal Metro",
  SYLHET_METRO = "Sylhet Metro",
  MYMENSINGH_METRO = "Mymensingh Metro",
  RANGPUR_METRO = "Rangpur Metro",
  COMILLA = "Comilla",
  NARAYANGANJ = "Narayanganj",
  GAZIPUR = "Gazipur",
}

export enum VehicleClass {
  KA = "KA",
  KHA = "KHA",
  GA = "GA",
  GHA = "GHA",
  CHA = "CHA",
  CHHA = "CHHA",
  JA = "JA",
  JHA = "JHA",
  TA = "TA",
  THA = "THA",
  DA = "DA",
  PA = "PA",
  BA = "BA",
  HA = "HA",
  LA = "LA",
  E = "E",
}

export enum VehicleType {
  BASIC = "BASIC",
  AC = "AC",
  ADVANCED = "ADVANCED",
  ICU = "ICU",
  NEONATAL = "NEONATAL",
}

export enum AmbulanceRequestType {
  EMERGENCY = "EMERGENCY",
  SCHEDULED = "SCHEDULED",
}

export enum AmbulanceRequestStatus {
  REQUESTED = "REQUESTED",
  ACCEPTED = "ACCEPTED",
  EN_ROUTE = "EN_ROUTE",
  ARRIVED = "ARRIVED",
  TRANSPORTING = "TRANSPORTING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}

export enum BidStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  WITHDRAWN = "WITHDRAWN",
  EXPIRED = "EXPIRED",
}

export enum InvitationStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}

export enum EmergencyType {
  ACCIDENT = "ACCIDENT",
  CARDIAC = "CARDIAC",
  STROKE = "STROKE",
  RESPIRATORY = "RESPIRATORY",
  BURN = "BURN",
  POISONING = "POISONING",
  MATERNITY = "MATERNITY",
  PEDIATRIC = "PEDIATRIC",
  TRAUMA = "TRAUMA",
  OTHER = "OTHER",
}

export enum SeverityLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export enum TripCancelledBy {
  PATIENT = "PATIENT",
  DRIVER = "DRIVER",
  SYSTEM = "SYSTEM",
}

export enum VehicleDocumentType {
  REGISTRATION = "REGISTRATION",
  FITNESS_CERTIFICATE = "FITNESS_CERTIFICATE",
  TAX_TOKEN = "TAX_TOKEN",
  ROUTE_PERMIT = "ROUTE_PERMIT",
  INSURANCE = "INSURANCE",
}

export enum DriverDocumentType {
  DRIVING_LICENSE = "DRIVING_LICENSE",
  NID = "NID",
}

export enum DocumentVerificationStatus {
  PENDING = "PENDING",
  UNDER_REVIEW = "UNDER_REVIEW",
  VERIFIED = "VERIFIED",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
}

export enum DoctorDocumentType {
  MEDICAL_DEGREE = "MEDICAL_DEGREE",
  BMDC_REGISTRATION = "BMDC_REGISTRATION",
  NID = "NID",
  SPECIALIZATION_CERTIFICATE = "SPECIALIZATION_CERTIFICATE",
  EXPERIENCE_LETTER = "EXPERIENCE_LETTER",
  OTHER = "OTHER",
}

export enum VideoCallStatus {
  WAITING = "WAITING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  MISSED = "MISSED",
  FAILED = "FAILED",
}

export enum WalletTransactionType {
  EARNING = "EARNING",
  WITHDRAWAL = "WITHDRAWAL",
  REFUND = "REFUND",
  ADJUSTMENT = "ADJUSTMENT",
  CASH_COLLECTED = "CASH_COLLECTED",
  CASH_DEPOSIT = "CASH_DEPOSIT",
}

export enum WalletTransactionStatus {
  PENDING = "PENDING",
  SETTLED = "SETTLED",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  REVERSED = "REVERSED",
}

export enum WithdrawalMethod {
  BKASH = "BKASH",
  NAGAD = "NAGAD",
  BANK_TRANSFER = "BANK_TRANSFER",
}

export enum ReportVerifierStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  SUSPENDED = "SUSPENDED",
}

export enum ReportVerificationStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}

export enum VerificationDecision {
  VERIFIED_ACCURATE = "VERIFIED_ACCURATE",
  CORRECTIONS_NEEDED = "CORRECTIONS_NEEDED",
  FLAGGED_CRITICAL = "FLAGGED_CRITICAL",
  INCONCLUSIVE = "INCONCLUSIVE",
}

export enum VerificationPriority {
  LOW = "LOW",
  NORMAL = "NORMAL",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export enum DiagnosisStaffRole {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  RECEPTIONIST = "RECEPTIONIST",
  LAB_TECHNICIAN = "LAB_TECHNICIAN",
  PHARMACIST = "PHARMACIST",
  NURSE = "NURSE",
  STAFF = "STAFF",
}

export enum DiagnosisRequestStatus {
  OPEN = "OPEN",
  BIDDING = "BIDDING",
  ACCEPTED = "ACCEPTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED",
}

export enum DiagnosisRequestType {
  MANUAL_TESTS = "MANUAL_TESTS",
  PRESCRIPTION_UPLOAD = "PRESCRIPTION_UPLOAD",
}

export enum DiagnosisBidStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  WITHDRAWN = "WITHDRAWN",
  EXPIRED = "EXPIRED",
}

export enum DiagnosisPaymentMethod {
  ONLINE = "ONLINE",
  COD = "COD",
}

export enum WalletLedgerType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

export enum QueueEntryStatus {
  WAITING = "WAITING",
  SERVING = "SERVING",
  SKIPPED = "SKIPPED",
  COMPLETED = "COMPLETED",
  LATE = "LATE",
}

export enum FieldWorkerStatus {
  OFFLINE = "OFFLINE",
  AVAILABLE = "AVAILABLE",
  ON_JOB = "ON_JOB",
}

export enum ShiftStatus {
  ACTIVE = "ACTIVE",
  ENDED = "ENDED",
}

export enum FieldStopType {
  SAMPLE_COLLECTION = "SAMPLE_COLLECTION",
  HOME_CONSULTATION = "HOME_CONSULTATION",
}

export enum StopStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  CANCELLED = "CANCELLED",
}

export enum StorageCondition {
  ROOM_TEMPERATURE = "ROOM_TEMPERATURE",
  REFRIGERATED = "REFRIGERATED",
  FROZEN = "FROZEN",
}

export enum RouteOfAdministration {
  ORAL = "ORAL",
  TOPICAL = "TOPICAL",
  INJECTION = "INJECTION",
  DROPS = "DROPS",
  INHALATION = "INHALATION",
}

export enum PregnancyCategory {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  X = "X",
  NA = "NA",
}

export enum AddressType {
  HOME = "HOME",
  OFFICE = "OFFICE",
  STORE_MAIN = "STORE_MAIN",
  OUTLET = "OUTLET",
  OTHER = "OTHER",
}

export enum RiderStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  ON_DELIVERY = "ON_DELIVERY",
  ON_BREAK = "ON_BREAK",
}

export enum DeliveryVehicleType {
  BICYCLE = "BICYCLE",
  MOTORCYCLE = "MOTORCYCLE",
  SCOOTER = "SCOOTER",
  OTHER = "OTHER",
}

export enum DeliveryStatus {
  PENDING = "PENDING",
  ASSIGNED = "ASSIGNED",
  PICKED_UP = "PICKED_UP",
  EN_ROUTE = "EN_ROUTE",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
}

export enum RiderDocumentType {
  NID = "NID",
  DRIVING_LICENSE = "DRIVING_LICENSE",
  VEHICLE_REGISTRATION = "VEHICLE_REGISTRATION",
}

export enum OrderType {
  REGULAR = "REGULAR",
  EMERGENCY = "EMERGENCY",
}

export enum OrderPaymentMethod {
  CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
  DIGITAL_PAYMENT = "DIGITAL_PAYMENT",
}

export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  RIDER_ASSIGNED = "RIDER_ASSIGNED",
  BUYING_MEDICINE = "BUYING_MEDICINE",
  PICKED_UP = "PICKED_UP",
  EN_ROUTE = "EN_ROUTE",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED",
}

export enum RiderOfferStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
}

export enum RiderBatch {
  TRAINEE = "TRAINEE",
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

export enum AdminInvitationStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
}

export enum LabResultFlag {
  NORMAL = "NORMAL",
  LOW = "LOW",
  HIGH = "HIGH",
  CRITICAL_LOW = "CRITICAL_LOW",
  CRITICAL_HIGH = "CRITICAL_HIGH",
}

export enum LabAlertStatus {
  PENDING = "PENDING",
  ACKNOWLEDGED = "ACKNOWLEDGED",
}
